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
 * The AttachVpnGatewayRequest model module.
 * @module model/AttachVpnGatewayRequest
 * @version 1.0.0
 */
var AttachVpnGatewayRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>AttachVpnGatewayRequest</code>.
   * Contains the parameters for AttachVpnGateway.
   * @alias module:model/AttachVpnGatewayRequest
   * @param vpcId {String} 
   * @param vpnGatewayId {String} 
   */
  function AttachVpnGatewayRequest(vpcId, vpnGatewayId) {
    _classCallCheck(this, AttachVpnGatewayRequest);

    AttachVpnGatewayRequest.initialize(this, vpcId, vpnGatewayId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AttachVpnGatewayRequest, null, [{
    key: "initialize",
    value: function initialize(obj, vpcId, vpnGatewayId) {
      obj['VpcId'] = vpcId;
      obj['VpnGatewayId'] = vpnGatewayId;
    }
    /**
     * Constructs a <code>AttachVpnGatewayRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AttachVpnGatewayRequest} obj Optional instance to populate.
     * @return {module:model/AttachVpnGatewayRequest} The populated <code>AttachVpnGatewayRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AttachVpnGatewayRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('VpcId')) {
          obj['VpcId'] = _ApiClient["default"].convertToType(data['VpcId'], 'String');
        }

        if (data.hasOwnProperty('VpnGatewayId')) {
          obj['VpnGatewayId'] = _ApiClient["default"].convertToType(data['VpnGatewayId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return AttachVpnGatewayRequest;
}();
/**
 * @member {Boolean} DryRun
 */


AttachVpnGatewayRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} VpcId
 */

AttachVpnGatewayRequest.prototype['VpcId'] = undefined;
/**
 * @member {String} VpnGatewayId
 */

AttachVpnGatewayRequest.prototype['VpnGatewayId'] = undefined;
var _default = AttachVpnGatewayRequest;
exports["default"] = _default;