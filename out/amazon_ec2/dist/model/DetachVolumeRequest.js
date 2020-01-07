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
 * The DetachVolumeRequest model module.
 * @module model/DetachVolumeRequest
 * @version 1.1.0
 */
var DetachVolumeRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DetachVolumeRequest</code>.
   * @alias module:model/DetachVolumeRequest
   * @param volumeId {String} 
   */
  function DetachVolumeRequest(volumeId) {
    _classCallCheck(this, DetachVolumeRequest);

    DetachVolumeRequest.initialize(this, volumeId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DetachVolumeRequest, null, [{
    key: "initialize",
    value: function initialize(obj, volumeId) {
      obj['VolumeId'] = volumeId;
    }
    /**
     * Constructs a <code>DetachVolumeRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DetachVolumeRequest} obj Optional instance to populate.
     * @return {module:model/DetachVolumeRequest} The populated <code>DetachVolumeRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DetachVolumeRequest();

        if (data.hasOwnProperty('Device')) {
          obj['Device'] = _ApiClient["default"].convertToType(data['Device'], 'String');
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('Force')) {
          obj['Force'] = _ApiClient["default"].convertToType(data['Force'], 'Boolean');
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

  return DetachVolumeRequest;
}();
/**
 * @member {String} Device
 */


DetachVolumeRequest.prototype['Device'] = undefined;
/**
 * @member {Boolean} DryRun
 */

DetachVolumeRequest.prototype['DryRun'] = undefined;
/**
 * @member {Boolean} Force
 */

DetachVolumeRequest.prototype['Force'] = undefined;
/**
 * @member {String} InstanceId
 */

DetachVolumeRequest.prototype['InstanceId'] = undefined;
/**
 * @member {String} VolumeId
 */

DetachVolumeRequest.prototype['VolumeId'] = undefined;
var _default = DetachVolumeRequest;
exports["default"] = _default;