"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ReservedInstancesConfiguration = _interopRequireDefault(require("./ReservedInstancesConfiguration"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ModifyReservedInstancesRequest model module.
 * @module model/ModifyReservedInstancesRequest
 * @version 1.0.0
 */
var ModifyReservedInstancesRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ModifyReservedInstancesRequest</code>.
   * Contains the parameters for ModifyReservedInstances.
   * @alias module:model/ModifyReservedInstancesRequest
   * @param reservedInstancesIds {Array.<String>} 
   * @param targetConfigurations {Array.<module:model/ReservedInstancesConfiguration>} 
   */
  function ModifyReservedInstancesRequest(reservedInstancesIds, targetConfigurations) {
    _classCallCheck(this, ModifyReservedInstancesRequest);

    ModifyReservedInstancesRequest.initialize(this, reservedInstancesIds, targetConfigurations);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ModifyReservedInstancesRequest, null, [{
    key: "initialize",
    value: function initialize(obj, reservedInstancesIds, targetConfigurations) {
      obj['ReservedInstancesIds'] = reservedInstancesIds;
      obj['TargetConfigurations'] = targetConfigurations;
    }
    /**
     * Constructs a <code>ModifyReservedInstancesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModifyReservedInstancesRequest} obj Optional instance to populate.
     * @return {module:model/ModifyReservedInstancesRequest} The populated <code>ModifyReservedInstancesRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ModifyReservedInstancesRequest();

        if (data.hasOwnProperty('ClientToken')) {
          obj['ClientToken'] = _ApiClient["default"].convertToType(data['ClientToken'], 'String');
        }

        if (data.hasOwnProperty('ReservedInstancesIds')) {
          obj['ReservedInstancesIds'] = _ApiClient["default"].convertToType(data['ReservedInstancesIds'], ['String']);
        }

        if (data.hasOwnProperty('TargetConfigurations')) {
          obj['TargetConfigurations'] = _ApiClient["default"].convertToType(data['TargetConfigurations'], [_ReservedInstancesConfiguration["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ModifyReservedInstancesRequest;
}();
/**
 * @member {String} ClientToken
 */


ModifyReservedInstancesRequest.prototype['ClientToken'] = undefined;
/**
 * @member {Array.<String>} ReservedInstancesIds
 */

ModifyReservedInstancesRequest.prototype['ReservedInstancesIds'] = undefined;
/**
 * @member {Array.<module:model/ReservedInstancesConfiguration>} TargetConfigurations
 */

ModifyReservedInstancesRequest.prototype['TargetConfigurations'] = undefined;
var _default = ModifyReservedInstancesRequest;
exports["default"] = _default;