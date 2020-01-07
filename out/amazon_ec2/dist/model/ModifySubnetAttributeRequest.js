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
 * The ModifySubnetAttributeRequest model module.
 * @module model/ModifySubnetAttributeRequest
 * @version 1.1.0
 */
var ModifySubnetAttributeRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ModifySubnetAttributeRequest</code>.
   * @alias module:model/ModifySubnetAttributeRequest
   * @param subnetId {String} 
   */
  function ModifySubnetAttributeRequest(subnetId) {
    _classCallCheck(this, ModifySubnetAttributeRequest);

    ModifySubnetAttributeRequest.initialize(this, subnetId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ModifySubnetAttributeRequest, null, [{
    key: "initialize",
    value: function initialize(obj, subnetId) {
      obj['SubnetId'] = subnetId;
    }
    /**
     * Constructs a <code>ModifySubnetAttributeRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModifySubnetAttributeRequest} obj Optional instance to populate.
     * @return {module:model/ModifySubnetAttributeRequest} The populated <code>ModifySubnetAttributeRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ModifySubnetAttributeRequest();

        if (data.hasOwnProperty('AssignIpv6AddressOnCreation')) {
          obj['AssignIpv6AddressOnCreation'] = _AttributeBooleanValue["default"].constructFromObject(data['AssignIpv6AddressOnCreation']);
        }

        if (data.hasOwnProperty('MapPublicIpOnLaunch')) {
          obj['MapPublicIpOnLaunch'] = _AttributeBooleanValue["default"].constructFromObject(data['MapPublicIpOnLaunch']);
        }

        if (data.hasOwnProperty('SubnetId')) {
          obj['SubnetId'] = _ApiClient["default"].convertToType(data['SubnetId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ModifySubnetAttributeRequest;
}();
/**
 * @member {module:model/AttributeBooleanValue} AssignIpv6AddressOnCreation
 */


ModifySubnetAttributeRequest.prototype['AssignIpv6AddressOnCreation'] = undefined;
/**
 * @member {module:model/AttributeBooleanValue} MapPublicIpOnLaunch
 */

ModifySubnetAttributeRequest.prototype['MapPublicIpOnLaunch'] = undefined;
/**
 * @member {String} SubnetId
 */

ModifySubnetAttributeRequest.prototype['SubnetId'] = undefined;
var _default = ModifySubnetAttributeRequest;
exports["default"] = _default;