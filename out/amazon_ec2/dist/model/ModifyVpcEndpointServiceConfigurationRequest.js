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
 * The ModifyVpcEndpointServiceConfigurationRequest model module.
 * @module model/ModifyVpcEndpointServiceConfigurationRequest
 * @version 1.0.0
 */
var ModifyVpcEndpointServiceConfigurationRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ModifyVpcEndpointServiceConfigurationRequest</code>.
   * @alias module:model/ModifyVpcEndpointServiceConfigurationRequest
   * @param serviceId {String} 
   */
  function ModifyVpcEndpointServiceConfigurationRequest(serviceId) {
    _classCallCheck(this, ModifyVpcEndpointServiceConfigurationRequest);

    ModifyVpcEndpointServiceConfigurationRequest.initialize(this, serviceId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ModifyVpcEndpointServiceConfigurationRequest, null, [{
    key: "initialize",
    value: function initialize(obj, serviceId) {
      obj['ServiceId'] = serviceId;
    }
    /**
     * Constructs a <code>ModifyVpcEndpointServiceConfigurationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModifyVpcEndpointServiceConfigurationRequest} obj Optional instance to populate.
     * @return {module:model/ModifyVpcEndpointServiceConfigurationRequest} The populated <code>ModifyVpcEndpointServiceConfigurationRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ModifyVpcEndpointServiceConfigurationRequest();

        if (data.hasOwnProperty('AcceptanceRequired')) {
          obj['AcceptanceRequired'] = _ApiClient["default"].convertToType(data['AcceptanceRequired'], 'Boolean');
        }

        if (data.hasOwnProperty('AddNetworkLoadBalancerArns')) {
          obj['AddNetworkLoadBalancerArns'] = _ApiClient["default"].convertToType(data['AddNetworkLoadBalancerArns'], ['String']);
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('RemoveNetworkLoadBalancerArns')) {
          obj['RemoveNetworkLoadBalancerArns'] = _ApiClient["default"].convertToType(data['RemoveNetworkLoadBalancerArns'], ['String']);
        }

        if (data.hasOwnProperty('ServiceId')) {
          obj['ServiceId'] = _ApiClient["default"].convertToType(data['ServiceId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ModifyVpcEndpointServiceConfigurationRequest;
}();
/**
 * @member {Boolean} AcceptanceRequired
 */


ModifyVpcEndpointServiceConfigurationRequest.prototype['AcceptanceRequired'] = undefined;
/**
 * @member {Array.<String>} AddNetworkLoadBalancerArns
 */

ModifyVpcEndpointServiceConfigurationRequest.prototype['AddNetworkLoadBalancerArns'] = undefined;
/**
 * @member {Boolean} DryRun
 */

ModifyVpcEndpointServiceConfigurationRequest.prototype['DryRun'] = undefined;
/**
 * @member {Array.<String>} RemoveNetworkLoadBalancerArns
 */

ModifyVpcEndpointServiceConfigurationRequest.prototype['RemoveNetworkLoadBalancerArns'] = undefined;
/**
 * @member {String} ServiceId
 */

ModifyVpcEndpointServiceConfigurationRequest.prototype['ServiceId'] = undefined;
var _default = ModifyVpcEndpointServiceConfigurationRequest;
exports["default"] = _default;