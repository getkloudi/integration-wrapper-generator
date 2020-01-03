"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _VolumeType = _interopRequireDefault(require("./VolumeType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ModifyVolumeRequest model module.
 * @module model/ModifyVolumeRequest
 * @version 1.0.0
 */
var ModifyVolumeRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ModifyVolumeRequest</code>.
   * @alias module:model/ModifyVolumeRequest
   * @param volumeId {String} 
   */
  function ModifyVolumeRequest(volumeId) {
    _classCallCheck(this, ModifyVolumeRequest);

    ModifyVolumeRequest.initialize(this, volumeId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ModifyVolumeRequest, null, [{
    key: "initialize",
    value: function initialize(obj, volumeId) {
      obj['VolumeId'] = volumeId;
    }
    /**
     * Constructs a <code>ModifyVolumeRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModifyVolumeRequest} obj Optional instance to populate.
     * @return {module:model/ModifyVolumeRequest} The populated <code>ModifyVolumeRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ModifyVolumeRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('Iops')) {
          obj['Iops'] = _ApiClient["default"].convertToType(data['Iops'], 'Number');
        }

        if (data.hasOwnProperty('Size')) {
          obj['Size'] = _ApiClient["default"].convertToType(data['Size'], 'Number');
        }

        if (data.hasOwnProperty('VolumeId')) {
          obj['VolumeId'] = _ApiClient["default"].convertToType(data['VolumeId'], 'String');
        }

        if (data.hasOwnProperty('VolumeType')) {
          obj['VolumeType'] = _VolumeType["default"].constructFromObject(data['VolumeType']);
        }
      }

      return obj;
    }
  }]);

  return ModifyVolumeRequest;
}();
/**
 * @member {Boolean} DryRun
 */


ModifyVolumeRequest.prototype['DryRun'] = undefined;
/**
 * @member {Number} Iops
 */

ModifyVolumeRequest.prototype['Iops'] = undefined;
/**
 * @member {Number} Size
 */

ModifyVolumeRequest.prototype['Size'] = undefined;
/**
 * @member {String} VolumeId
 */

ModifyVolumeRequest.prototype['VolumeId'] = undefined;
/**
 * @member {module:model/VolumeType} VolumeType
 */

ModifyVolumeRequest.prototype['VolumeType'] = undefined;
var _default = ModifyVolumeRequest;
exports["default"] = _default;