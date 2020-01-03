"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EndDateType = _interopRequireDefault(require("./EndDateType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ModifyCapacityReservationRequest model module.
 * @module model/ModifyCapacityReservationRequest
 * @version 1.0.0
 */
var ModifyCapacityReservationRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ModifyCapacityReservationRequest</code>.
   * @alias module:model/ModifyCapacityReservationRequest
   * @param capacityReservationId {String} 
   */
  function ModifyCapacityReservationRequest(capacityReservationId) {
    _classCallCheck(this, ModifyCapacityReservationRequest);

    ModifyCapacityReservationRequest.initialize(this, capacityReservationId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ModifyCapacityReservationRequest, null, [{
    key: "initialize",
    value: function initialize(obj, capacityReservationId) {
      obj['CapacityReservationId'] = capacityReservationId;
    }
    /**
     * Constructs a <code>ModifyCapacityReservationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModifyCapacityReservationRequest} obj Optional instance to populate.
     * @return {module:model/ModifyCapacityReservationRequest} The populated <code>ModifyCapacityReservationRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ModifyCapacityReservationRequest();

        if (data.hasOwnProperty('CapacityReservationId')) {
          obj['CapacityReservationId'] = _ApiClient["default"].convertToType(data['CapacityReservationId'], 'String');
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('EndDate')) {
          obj['EndDate'] = _ApiClient["default"].convertToType(data['EndDate'], 'Date');
        }

        if (data.hasOwnProperty('EndDateType')) {
          obj['EndDateType'] = _EndDateType["default"].constructFromObject(data['EndDateType']);
        }

        if (data.hasOwnProperty('InstanceCount')) {
          obj['InstanceCount'] = _ApiClient["default"].convertToType(data['InstanceCount'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ModifyCapacityReservationRequest;
}();
/**
 * @member {String} CapacityReservationId
 */


ModifyCapacityReservationRequest.prototype['CapacityReservationId'] = undefined;
/**
 * @member {Boolean} DryRun
 */

ModifyCapacityReservationRequest.prototype['DryRun'] = undefined;
/**
 * @member {Date} EndDate
 */

ModifyCapacityReservationRequest.prototype['EndDate'] = undefined;
/**
 * @member {module:model/EndDateType} EndDateType
 */

ModifyCapacityReservationRequest.prototype['EndDateType'] = undefined;
/**
 * @member {Number} InstanceCount
 */

ModifyCapacityReservationRequest.prototype['InstanceCount'] = undefined;
var _default = ModifyCapacityReservationRequest;
exports["default"] = _default;