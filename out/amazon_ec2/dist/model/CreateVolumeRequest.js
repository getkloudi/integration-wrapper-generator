"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TagSpecification = _interopRequireDefault(require("./TagSpecification"));

var _VolumeType = _interopRequireDefault(require("./VolumeType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateVolumeRequest model module.
 * @module model/CreateVolumeRequest
 * @version 1.0.0
 */
var CreateVolumeRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CreateVolumeRequest</code>.
   * @alias module:model/CreateVolumeRequest
   * @param availabilityZone {String} 
   */
  function CreateVolumeRequest(availabilityZone) {
    _classCallCheck(this, CreateVolumeRequest);

    CreateVolumeRequest.initialize(this, availabilityZone);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateVolumeRequest, null, [{
    key: "initialize",
    value: function initialize(obj, availabilityZone) {
      obj['AvailabilityZone'] = availabilityZone;
    }
    /**
     * Constructs a <code>CreateVolumeRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateVolumeRequest} obj Optional instance to populate.
     * @return {module:model/CreateVolumeRequest} The populated <code>CreateVolumeRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateVolumeRequest();

        if (data.hasOwnProperty('AvailabilityZone')) {
          obj['AvailabilityZone'] = _ApiClient["default"].convertToType(data['AvailabilityZone'], 'String');
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('Encrypted')) {
          obj['Encrypted'] = _ApiClient["default"].convertToType(data['Encrypted'], 'Boolean');
        }

        if (data.hasOwnProperty('Iops')) {
          obj['Iops'] = _ApiClient["default"].convertToType(data['Iops'], 'Number');
        }

        if (data.hasOwnProperty('KmsKeyId')) {
          obj['KmsKeyId'] = _ApiClient["default"].convertToType(data['KmsKeyId'], 'String');
        }

        if (data.hasOwnProperty('OutpostArn')) {
          obj['OutpostArn'] = _ApiClient["default"].convertToType(data['OutpostArn'], 'String');
        }

        if (data.hasOwnProperty('Size')) {
          obj['Size'] = _ApiClient["default"].convertToType(data['Size'], 'Number');
        }

        if (data.hasOwnProperty('SnapshotId')) {
          obj['SnapshotId'] = _ApiClient["default"].convertToType(data['SnapshotId'], 'String');
        }

        if (data.hasOwnProperty('TagSpecifications')) {
          obj['TagSpecifications'] = _ApiClient["default"].convertToType(data['TagSpecifications'], [_TagSpecification["default"]]);
        }

        if (data.hasOwnProperty('VolumeType')) {
          obj['VolumeType'] = _VolumeType["default"].constructFromObject(data['VolumeType']);
        }
      }

      return obj;
    }
  }]);

  return CreateVolumeRequest;
}();
/**
 * @member {String} AvailabilityZone
 */


CreateVolumeRequest.prototype['AvailabilityZone'] = undefined;
/**
 * @member {Boolean} DryRun
 */

CreateVolumeRequest.prototype['DryRun'] = undefined;
/**
 * @member {Boolean} Encrypted
 */

CreateVolumeRequest.prototype['Encrypted'] = undefined;
/**
 * @member {Number} Iops
 */

CreateVolumeRequest.prototype['Iops'] = undefined;
/**
 * @member {String} KmsKeyId
 */

CreateVolumeRequest.prototype['KmsKeyId'] = undefined;
/**
 * @member {String} OutpostArn
 */

CreateVolumeRequest.prototype['OutpostArn'] = undefined;
/**
 * @member {Number} Size
 */

CreateVolumeRequest.prototype['Size'] = undefined;
/**
 * @member {String} SnapshotId
 */

CreateVolumeRequest.prototype['SnapshotId'] = undefined;
/**
 * @member {Array.<module:model/TagSpecification>} TagSpecifications
 */

CreateVolumeRequest.prototype['TagSpecifications'] = undefined;
/**
 * @member {module:model/VolumeType} VolumeType
 */

CreateVolumeRequest.prototype['VolumeType'] = undefined;
var _default = CreateVolumeRequest;
exports["default"] = _default;