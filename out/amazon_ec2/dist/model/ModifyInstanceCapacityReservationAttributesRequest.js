"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CapacityReservationSpecification = _interopRequireDefault(require("./CapacityReservationSpecification"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ModifyInstanceCapacityReservationAttributesRequest model module.
 * @module model/ModifyInstanceCapacityReservationAttributesRequest
 * @version 1.1.0
 */
var ModifyInstanceCapacityReservationAttributesRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ModifyInstanceCapacityReservationAttributesRequest</code>.
   * @alias module:model/ModifyInstanceCapacityReservationAttributesRequest
   * @param capacityReservationSpecification {module:model/CapacityReservationSpecification} 
   * @param instanceId {String} 
   */
  function ModifyInstanceCapacityReservationAttributesRequest(capacityReservationSpecification, instanceId) {
    _classCallCheck(this, ModifyInstanceCapacityReservationAttributesRequest);

    ModifyInstanceCapacityReservationAttributesRequest.initialize(this, capacityReservationSpecification, instanceId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ModifyInstanceCapacityReservationAttributesRequest, null, [{
    key: "initialize",
    value: function initialize(obj, capacityReservationSpecification, instanceId) {
      obj['CapacityReservationSpecification'] = capacityReservationSpecification;
      obj['InstanceId'] = instanceId;
    }
    /**
     * Constructs a <code>ModifyInstanceCapacityReservationAttributesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModifyInstanceCapacityReservationAttributesRequest} obj Optional instance to populate.
     * @return {module:model/ModifyInstanceCapacityReservationAttributesRequest} The populated <code>ModifyInstanceCapacityReservationAttributesRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ModifyInstanceCapacityReservationAttributesRequest();

        if (data.hasOwnProperty('CapacityReservationSpecification')) {
          obj['CapacityReservationSpecification'] = _CapacityReservationSpecification["default"].constructFromObject(data['CapacityReservationSpecification']);
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('InstanceId')) {
          obj['InstanceId'] = _ApiClient["default"].convertToType(data['InstanceId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ModifyInstanceCapacityReservationAttributesRequest;
}();
/**
 * @member {module:model/CapacityReservationSpecification} CapacityReservationSpecification
 */


ModifyInstanceCapacityReservationAttributesRequest.prototype['CapacityReservationSpecification'] = undefined;
/**
 * @member {Boolean} DryRun
 */

ModifyInstanceCapacityReservationAttributesRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} InstanceId
 */

ModifyInstanceCapacityReservationAttributesRequest.prototype['InstanceId'] = undefined;
var _default = ModifyInstanceCapacityReservationAttributesRequest;
exports["default"] = _default;