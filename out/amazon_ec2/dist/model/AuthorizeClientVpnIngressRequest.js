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
 * The AuthorizeClientVpnIngressRequest model module.
 * @module model/AuthorizeClientVpnIngressRequest
 * @version 1.1.0
 */
var AuthorizeClientVpnIngressRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>AuthorizeClientVpnIngressRequest</code>.
   * @alias module:model/AuthorizeClientVpnIngressRequest
   * @param clientVpnEndpointId {String} 
   * @param targetNetworkCidr {String} 
   */
  function AuthorizeClientVpnIngressRequest(clientVpnEndpointId, targetNetworkCidr) {
    _classCallCheck(this, AuthorizeClientVpnIngressRequest);

    AuthorizeClientVpnIngressRequest.initialize(this, clientVpnEndpointId, targetNetworkCidr);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AuthorizeClientVpnIngressRequest, null, [{
    key: "initialize",
    value: function initialize(obj, clientVpnEndpointId, targetNetworkCidr) {
      obj['ClientVpnEndpointId'] = clientVpnEndpointId;
      obj['TargetNetworkCidr'] = targetNetworkCidr;
    }
    /**
     * Constructs a <code>AuthorizeClientVpnIngressRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AuthorizeClientVpnIngressRequest} obj Optional instance to populate.
     * @return {module:model/AuthorizeClientVpnIngressRequest} The populated <code>AuthorizeClientVpnIngressRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AuthorizeClientVpnIngressRequest();

        if (data.hasOwnProperty('AccessGroupId')) {
          obj['AccessGroupId'] = _ApiClient["default"].convertToType(data['AccessGroupId'], 'String');
        }

        if (data.hasOwnProperty('AuthorizeAllGroups')) {
          obj['AuthorizeAllGroups'] = _ApiClient["default"].convertToType(data['AuthorizeAllGroups'], 'Boolean');
        }

        if (data.hasOwnProperty('ClientToken')) {
          obj['ClientToken'] = _ApiClient["default"].convertToType(data['ClientToken'], 'String');
        }

        if (data.hasOwnProperty('ClientVpnEndpointId')) {
          obj['ClientVpnEndpointId'] = _ApiClient["default"].convertToType(data['ClientVpnEndpointId'], 'String');
        }

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('TargetNetworkCidr')) {
          obj['TargetNetworkCidr'] = _ApiClient["default"].convertToType(data['TargetNetworkCidr'], 'String');
        }
      }

      return obj;
    }
  }]);

  return AuthorizeClientVpnIngressRequest;
}();
/**
 * @member {String} AccessGroupId
 */


AuthorizeClientVpnIngressRequest.prototype['AccessGroupId'] = undefined;
/**
 * @member {Boolean} AuthorizeAllGroups
 */

AuthorizeClientVpnIngressRequest.prototype['AuthorizeAllGroups'] = undefined;
/**
 * @member {String} ClientToken
 */

AuthorizeClientVpnIngressRequest.prototype['ClientToken'] = undefined;
/**
 * @member {String} ClientVpnEndpointId
 */

AuthorizeClientVpnIngressRequest.prototype['ClientVpnEndpointId'] = undefined;
/**
 * @member {String} Description
 */

AuthorizeClientVpnIngressRequest.prototype['Description'] = undefined;
/**
 * @member {Boolean} DryRun
 */

AuthorizeClientVpnIngressRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} TargetNetworkCidr
 */

AuthorizeClientVpnIngressRequest.prototype['TargetNetworkCidr'] = undefined;
var _default = AuthorizeClientVpnIngressRequest;
exports["default"] = _default;