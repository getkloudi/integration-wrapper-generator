"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FleetExcessCapacityTerminationPolicy = _interopRequireDefault(require("./FleetExcessCapacityTerminationPolicy"));

var _TargetCapacitySpecificationRequest = _interopRequireDefault(require("./TargetCapacitySpecificationRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ModifyFleetRequest model module.
 * @module model/ModifyFleetRequest
 * @version 1.1.0
 */
var ModifyFleetRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ModifyFleetRequest</code>.
   * @alias module:model/ModifyFleetRequest
   * @param fleetId {String} 
   * @param targetCapacitySpecification {module:model/TargetCapacitySpecificationRequest} 
   */
  function ModifyFleetRequest(fleetId, targetCapacitySpecification) {
    _classCallCheck(this, ModifyFleetRequest);

    ModifyFleetRequest.initialize(this, fleetId, targetCapacitySpecification);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ModifyFleetRequest, null, [{
    key: "initialize",
    value: function initialize(obj, fleetId, targetCapacitySpecification) {
      obj['FleetId'] = fleetId;
      obj['TargetCapacitySpecification'] = targetCapacitySpecification;
    }
    /**
     * Constructs a <code>ModifyFleetRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModifyFleetRequest} obj Optional instance to populate.
     * @return {module:model/ModifyFleetRequest} The populated <code>ModifyFleetRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ModifyFleetRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('ExcessCapacityTerminationPolicy')) {
          obj['ExcessCapacityTerminationPolicy'] = _FleetExcessCapacityTerminationPolicy["default"].constructFromObject(data['ExcessCapacityTerminationPolicy']);
        }

        if (data.hasOwnProperty('FleetId')) {
          obj['FleetId'] = _ApiClient["default"].convertToType(data['FleetId'], 'String');
        }

        if (data.hasOwnProperty('TargetCapacitySpecification')) {
          obj['TargetCapacitySpecification'] = _TargetCapacitySpecificationRequest["default"].constructFromObject(data['TargetCapacitySpecification']);
        }
      }

      return obj;
    }
  }]);

  return ModifyFleetRequest;
}();
/**
 * @member {Boolean} DryRun
 */


ModifyFleetRequest.prototype['DryRun'] = undefined;
/**
 * @member {module:model/FleetExcessCapacityTerminationPolicy} ExcessCapacityTerminationPolicy
 */

ModifyFleetRequest.prototype['ExcessCapacityTerminationPolicy'] = undefined;
/**
 * @member {String} FleetId
 */

ModifyFleetRequest.prototype['FleetId'] = undefined;
/**
 * @member {module:model/TargetCapacitySpecificationRequest} TargetCapacitySpecification
 */

ModifyFleetRequest.prototype['TargetCapacitySpecification'] = undefined;
var _default = ModifyFleetRequest;
exports["default"] = _default;