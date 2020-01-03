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
 * The DetachVpnGatewayRequest model module.
 * @module model/DetachVpnGatewayRequest
 * @version 1.0.0
 */
var DetachVpnGatewayRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DetachVpnGatewayRequest</code>.
   * Contains the parameters for DetachVpnGateway.
   * @alias module:model/DetachVpnGatewayRequest
   * @param vpcId {String} 
   * @param vpnGatewayId {String} 
   */
  function DetachVpnGatewayRequest(vpcId, vpnGatewayId) {
    _classCallCheck(this, DetachVpnGatewayRequest);

    DetachVpnGatewayRequest.initialize(this, vpcId, vpnGatewayId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DetachVpnGatewayRequest, null, [{
    key: "initialize",
    value: function initialize(obj, vpcId, vpnGatewayId) {
      obj['VpcId'] = vpcId;
      obj['VpnGatewayId'] = vpnGatewayId;
    }
    /**
     * Constructs a <code>DetachVpnGatewayRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DetachVpnGatewayRequest} obj Optional instance to populate.
     * @return {module:model/DetachVpnGatewayRequest} The populated <code>DetachVpnGatewayRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DetachVpnGatewayRequest();

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

  return DetachVpnGatewayRequest;
}();
/**
 * @member {Boolean} DryRun
 */


DetachVpnGatewayRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} VpcId
 */

DetachVpnGatewayRequest.prototype['VpcId'] = undefined;
/**
 * @member {String} VpnGatewayId
 */

DetachVpnGatewayRequest.prototype['VpnGatewayId'] = undefined;
var _default = DetachVpnGatewayRequest;
exports["default"] = _default;