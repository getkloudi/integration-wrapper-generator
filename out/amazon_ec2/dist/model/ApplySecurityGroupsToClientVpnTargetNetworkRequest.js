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
 * The ApplySecurityGroupsToClientVpnTargetNetworkRequest model module.
 * @module model/ApplySecurityGroupsToClientVpnTargetNetworkRequest
 * @version 1.1.0
 */
var ApplySecurityGroupsToClientVpnTargetNetworkRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ApplySecurityGroupsToClientVpnTargetNetworkRequest</code>.
   * @alias module:model/ApplySecurityGroupsToClientVpnTargetNetworkRequest
   * @param clientVpnEndpointId {String} 
   * @param securityGroupIds {Array.<String>} 
   * @param vpcId {String} 
   */
  function ApplySecurityGroupsToClientVpnTargetNetworkRequest(clientVpnEndpointId, securityGroupIds, vpcId) {
    _classCallCheck(this, ApplySecurityGroupsToClientVpnTargetNetworkRequest);

    ApplySecurityGroupsToClientVpnTargetNetworkRequest.initialize(this, clientVpnEndpointId, securityGroupIds, vpcId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ApplySecurityGroupsToClientVpnTargetNetworkRequest, null, [{
    key: "initialize",
    value: function initialize(obj, clientVpnEndpointId, securityGroupIds, vpcId) {
      obj['ClientVpnEndpointId'] = clientVpnEndpointId;
      obj['SecurityGroupIds'] = securityGroupIds;
      obj['VpcId'] = vpcId;
    }
    /**
     * Constructs a <code>ApplySecurityGroupsToClientVpnTargetNetworkRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApplySecurityGroupsToClientVpnTargetNetworkRequest} obj Optional instance to populate.
     * @return {module:model/ApplySecurityGroupsToClientVpnTargetNetworkRequest} The populated <code>ApplySecurityGroupsToClientVpnTargetNetworkRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ApplySecurityGroupsToClientVpnTargetNetworkRequest();

        if (data.hasOwnProperty('ClientVpnEndpointId')) {
          obj['ClientVpnEndpointId'] = _ApiClient["default"].convertToType(data['ClientVpnEndpointId'], 'String');
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('SecurityGroupIds')) {
          obj['SecurityGroupIds'] = _ApiClient["default"].convertToType(data['SecurityGroupIds'], ['String']);
        }

        if (data.hasOwnProperty('VpcId')) {
          obj['VpcId'] = _ApiClient["default"].convertToType(data['VpcId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ApplySecurityGroupsToClientVpnTargetNetworkRequest;
}();
/**
 * @member {String} ClientVpnEndpointId
 */


ApplySecurityGroupsToClientVpnTargetNetworkRequest.prototype['ClientVpnEndpointId'] = undefined;
/**
 * @member {Boolean} DryRun
 */

ApplySecurityGroupsToClientVpnTargetNetworkRequest.prototype['DryRun'] = undefined;
/**
 * @member {Array.<String>} SecurityGroupIds
 */

ApplySecurityGroupsToClientVpnTargetNetworkRequest.prototype['SecurityGroupIds'] = undefined;
/**
 * @member {String} VpcId
 */

ApplySecurityGroupsToClientVpnTargetNetworkRequest.prototype['VpcId'] = undefined;
var _default = ApplySecurityGroupsToClientVpnTargetNetworkRequest;
exports["default"] = _default;