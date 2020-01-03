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
 * The AttachVolumeRequest model module.
 * @module model/AttachVolumeRequest
 * @version 1.0.0
 */
var AttachVolumeRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>AttachVolumeRequest</code>.
   * @alias module:model/AttachVolumeRequest
   * @param device {String} 
   * @param instanceId {String} 
   * @param volumeId {String} 
   */
  function AttachVolumeRequest(device, instanceId, volumeId) {
    _classCallCheck(this, AttachVolumeRequest);

    AttachVolumeRequest.initialize(this, device, instanceId, volumeId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AttachVolumeRequest, null, [{
    key: "initialize",
    value: function initialize(obj, device, instanceId, volumeId) {
      obj['Device'] = device;
      obj['InstanceId'] = instanceId;
      obj['VolumeId'] = volumeId;
    }
    /**
     * Constructs a <code>AttachVolumeRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AttachVolumeRequest} obj Optional instance to populate.
     * @return {module:model/AttachVolumeRequest} The populated <code>AttachVolumeRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AttachVolumeRequest();

        if (data.hasOwnProperty('Device')) {
          obj['Device'] = _ApiClient["default"].convertToType(data['Device'], 'String');
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('InstanceId')) {
          obj['InstanceId'] = _ApiClient["default"].convertToType(data['InstanceId'], 'String');
        }

        if (data.hasOwnProperty('VolumeId')) {
          obj['VolumeId'] = _ApiClient["default"].convertToType(data['VolumeId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return AttachVolumeRequest;
}();
/**
 * @member {String} Device
 */


AttachVolumeRequest.prototype['Device'] = undefined;
/**
 * @member {Boolean} DryRun
 */

AttachVolumeRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} InstanceId
 */

AttachVolumeRequest.prototype['InstanceId'] = undefined;
/**
 * @member {String} VolumeId
 */

AttachVolumeRequest.prototype['VolumeId'] = undefined;
var _default = AttachVolumeRequest;
exports["default"] = _default;