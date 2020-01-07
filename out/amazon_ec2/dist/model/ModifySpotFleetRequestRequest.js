"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ExcessCapacityTerminationPolicy = _interopRequireDefault(require("./ExcessCapacityTerminationPolicy"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ModifySpotFleetRequestRequest model module.
 * @module model/ModifySpotFleetRequestRequest
 * @version 1.1.0
 */
var ModifySpotFleetRequestRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ModifySpotFleetRequestRequest</code>.
   * Contains the parameters for ModifySpotFleetRequest.
   * @alias module:model/ModifySpotFleetRequestRequest
   * @param spotFleetRequestId {String} 
   */
  function ModifySpotFleetRequestRequest(spotFleetRequestId) {
    _classCallCheck(this, ModifySpotFleetRequestRequest);

    ModifySpotFleetRequestRequest.initialize(this, spotFleetRequestId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ModifySpotFleetRequestRequest, null, [{
    key: "initialize",
    value: function initialize(obj, spotFleetRequestId) {
      obj['SpotFleetRequestId'] = spotFleetRequestId;
    }
    /**
     * Constructs a <code>ModifySpotFleetRequestRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModifySpotFleetRequestRequest} obj Optional instance to populate.
     * @return {module:model/ModifySpotFleetRequestRequest} The populated <code>ModifySpotFleetRequestRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ModifySpotFleetRequestRequest();

        if (data.hasOwnProperty('ExcessCapacityTerminationPolicy')) {
          obj['ExcessCapacityTerminationPolicy'] = _ExcessCapacityTerminationPolicy["default"].constructFromObject(data['ExcessCapacityTerminationPolicy']);
        }

        if (data.hasOwnProperty('OnDemandTargetCapacity')) {
          obj['OnDemandTargetCapacity'] = _ApiClient["default"].convertToType(data['OnDemandTargetCapacity'], 'Number');
        }

        if (data.hasOwnProperty('SpotFleetRequestId')) {
          obj['SpotFleetRequestId'] = _ApiClient["default"].convertToType(data['SpotFleetRequestId'], 'String');
        }

        if (data.hasOwnProperty('TargetCapacity')) {
          obj['TargetCapacity'] = _ApiClient["default"].convertToType(data['TargetCapacity'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ModifySpotFleetRequestRequest;
}();
/**
 * @member {module:model/ExcessCapacityTerminationPolicy} ExcessCapacityTerminationPolicy
 */


ModifySpotFleetRequestRequest.prototype['ExcessCapacityTerminationPolicy'] = undefined;
/**
 * @member {Number} OnDemandTargetCapacity
 */

ModifySpotFleetRequestRequest.prototype['OnDemandTargetCapacity'] = undefined;
/**
 * @member {String} SpotFleetRequestId
 */

ModifySpotFleetRequestRequest.prototype['SpotFleetRequestId'] = undefined;
/**
 * @member {Number} TargetCapacity
 */

ModifySpotFleetRequestRequest.prototype['TargetCapacity'] = undefined;
var _default = ModifySpotFleetRequestRequest;
exports["default"] = _default;