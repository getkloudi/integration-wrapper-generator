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
 * The DeleteVpnGatewayRequest model module.
 * @module model/DeleteVpnGatewayRequest
 * @version 1.1.0
 */
var DeleteVpnGatewayRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DeleteVpnGatewayRequest</code>.
   * Contains the parameters for DeleteVpnGateway.
   * @alias module:model/DeleteVpnGatewayRequest
   * @param vpnGatewayId {String} 
   */
  function DeleteVpnGatewayRequest(vpnGatewayId) {
    _classCallCheck(this, DeleteVpnGatewayRequest);

    DeleteVpnGatewayRequest.initialize(this, vpnGatewayId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeleteVpnGatewayRequest, null, [{
    key: "initialize",
    value: function initialize(obj, vpnGatewayId) {
      obj['VpnGatewayId'] = vpnGatewayId;
    }
    /**
     * Constructs a <code>DeleteVpnGatewayRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteVpnGatewayRequest} obj Optional instance to populate.
     * @return {module:model/DeleteVpnGatewayRequest} The populated <code>DeleteVpnGatewayRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeleteVpnGatewayRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('VpnGatewayId')) {
          obj['VpnGatewayId'] = _ApiClient["default"].convertToType(data['VpnGatewayId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DeleteVpnGatewayRequest;
}();
/**
 * @member {Boolean} DryRun
 */


DeleteVpnGatewayRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} VpnGatewayId
 */

DeleteVpnGatewayRequest.prototype['VpnGatewayId'] = undefined;
var _default = DeleteVpnGatewayRequest;
exports["default"] = _default;