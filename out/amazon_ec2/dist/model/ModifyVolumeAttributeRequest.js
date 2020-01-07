"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AttributeBooleanValue = _interopRequireDefault(require("./AttributeBooleanValue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ModifyVolumeAttributeRequest model module.
 * @module model/ModifyVolumeAttributeRequest
 * @version 1.1.0
 */
var ModifyVolumeAttributeRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ModifyVolumeAttributeRequest</code>.
   * @alias module:model/ModifyVolumeAttributeRequest
   * @param volumeId {String} 
   */
  function ModifyVolumeAttributeRequest(volumeId) {
    _classCallCheck(this, ModifyVolumeAttributeRequest);

    ModifyVolumeAttributeRequest.initialize(this, volumeId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ModifyVolumeAttributeRequest, null, [{
    key: "initialize",
    value: function initialize(obj, volumeId) {
      obj['VolumeId'] = volumeId;
    }
    /**
     * Constructs a <code>ModifyVolumeAttributeRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModifyVolumeAttributeRequest} obj Optional instance to populate.
     * @return {module:model/ModifyVolumeAttributeRequest} The populated <code>ModifyVolumeAttributeRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ModifyVolumeAttributeRequest();

        if (data.hasOwnProperty('AutoEnableIO')) {
          obj['AutoEnableIO'] = _AttributeBooleanValue["default"].constructFromObject(data['AutoEnableIO']);
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('VolumeId')) {
          obj['VolumeId'] = _ApiClient["default"].convertToType(data['VolumeId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ModifyVolumeAttributeRequest;
}();
/**
 * @member {module:model/AttributeBooleanValue} AutoEnableIO
 */


ModifyVolumeAttributeRequest.prototype['AutoEnableIO'] = undefined;
/**
 * @member {Boolean} DryRun
 */

ModifyVolumeAttributeRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} VolumeId
 */

ModifyVolumeAttributeRequest.prototype['VolumeId'] = undefined;
var _default = ModifyVolumeAttributeRequest;
exports["default"] = _default;