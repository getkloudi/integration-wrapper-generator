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
 * The ModifyVpcEndpointRequest model module.
 * @module model/ModifyVpcEndpointRequest
 * @version 1.0.0
 */
var ModifyVpcEndpointRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ModifyVpcEndpointRequest</code>.
   * Contains the parameters for ModifyVpcEndpoint.
   * @alias module:model/ModifyVpcEndpointRequest
   * @param vpcEndpointId {String} 
   */
  function ModifyVpcEndpointRequest(vpcEndpointId) {
    _classCallCheck(this, ModifyVpcEndpointRequest);

    ModifyVpcEndpointRequest.initialize(this, vpcEndpointId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ModifyVpcEndpointRequest, null, [{
    key: "initialize",
    value: function initialize(obj, vpcEndpointId) {
      obj['VpcEndpointId'] = vpcEndpointId;
    }
    /**
     * Constructs a <code>ModifyVpcEndpointRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModifyVpcEndpointRequest} obj Optional instance to populate.
     * @return {module:model/ModifyVpcEndpointRequest} The populated <code>ModifyVpcEndpointRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ModifyVpcEndpointRequest();

        if (data.hasOwnProperty('AddRouteTableIds')) {
          obj['AddRouteTableIds'] = _ApiClient["default"].convertToType(data['AddRouteTableIds'], ['String']);
        }

        if (data.hasOwnProperty('AddSecurityGroupIds')) {
          obj['AddSecurityGroupIds'] = _ApiClient["default"].convertToType(data['AddSecurityGroupIds'], ['String']);
        }

        if (data.hasOwnProperty('AddSubnetIds')) {
          obj['AddSubnetIds'] = _ApiClient["default"].convertToType(data['AddSubnetIds'], ['String']);
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('PolicyDocument')) {
          obj['PolicyDocument'] = _ApiClient["default"].convertToType(data['PolicyDocument'], 'String');
        }

        if (data.hasOwnProperty('PrivateDnsEnabled')) {
          obj['PrivateDnsEnabled'] = _ApiClient["default"].convertToType(data['PrivateDnsEnabled'], 'Boolean');
        }

        if (data.hasOwnProperty('RemoveRouteTableIds')) {
          obj['RemoveRouteTableIds'] = _ApiClient["default"].convertToType(data['RemoveRouteTableIds'], ['String']);
        }

        if (data.hasOwnProperty('RemoveSecurityGroupIds')) {
          obj['RemoveSecurityGroupIds'] = _ApiClient["default"].convertToType(data['RemoveSecurityGroupIds'], ['String']);
        }

        if (data.hasOwnProperty('RemoveSubnetIds')) {
          obj['RemoveSubnetIds'] = _ApiClient["default"].convertToType(data['RemoveSubnetIds'], ['String']);
        }

        if (data.hasOwnProperty('ResetPolicy')) {
          obj['ResetPolicy'] = _ApiClient["default"].convertToType(data['ResetPolicy'], 'Boolean');
        }

        if (data.hasOwnProperty('VpcEndpointId')) {
          obj['VpcEndpointId'] = _ApiClient["default"].convertToType(data['VpcEndpointId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ModifyVpcEndpointRequest;
}();
/**
 * @member {Array.<String>} AddRouteTableIds
 */


ModifyVpcEndpointRequest.prototype['AddRouteTableIds'] = undefined;
/**
 * @member {Array.<String>} AddSecurityGroupIds
 */

ModifyVpcEndpointRequest.prototype['AddSecurityGroupIds'] = undefined;
/**
 * @member {Array.<String>} AddSubnetIds
 */

ModifyVpcEndpointRequest.prototype['AddSubnetIds'] = undefined;
/**
 * @member {Boolean} DryRun
 */

ModifyVpcEndpointRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} PolicyDocument
 */

ModifyVpcEndpointRequest.prototype['PolicyDocument'] = undefined;
/**
 * @member {Boolean} PrivateDnsEnabled
 */

ModifyVpcEndpointRequest.prototype['PrivateDnsEnabled'] = undefined;
/**
 * @member {Array.<String>} RemoveRouteTableIds
 */

ModifyVpcEndpointRequest.prototype['RemoveRouteTableIds'] = undefined;
/**
 * @member {Array.<String>} RemoveSecurityGroupIds
 */

ModifyVpcEndpointRequest.prototype['RemoveSecurityGroupIds'] = undefined;
/**
 * @member {Array.<String>} RemoveSubnetIds
 */

ModifyVpcEndpointRequest.prototype['RemoveSubnetIds'] = undefined;
/**
 * @member {Boolean} ResetPolicy
 */

ModifyVpcEndpointRequest.prototype['ResetPolicy'] = undefined;
/**
 * @member {String} VpcEndpointId
 */

ModifyVpcEndpointRequest.prototype['VpcEndpointId'] = undefined;
var _default = ModifyVpcEndpointRequest;
exports["default"] = _default;