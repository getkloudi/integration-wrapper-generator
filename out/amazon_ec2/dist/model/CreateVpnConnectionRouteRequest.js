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
 * The CreateVpnConnectionRouteRequest model module.
 * @module model/CreateVpnConnectionRouteRequest
 * @version 1.1.0
 */
var CreateVpnConnectionRouteRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CreateVpnConnectionRouteRequest</code>.
   * Contains the parameters for CreateVpnConnectionRoute.
   * @alias module:model/CreateVpnConnectionRouteRequest
   * @param destinationCidrBlock {String} 
   * @param vpnConnectionId {String} 
   */
  function CreateVpnConnectionRouteRequest(destinationCidrBlock, vpnConnectionId) {
    _classCallCheck(this, CreateVpnConnectionRouteRequest);

    CreateVpnConnectionRouteRequest.initialize(this, destinationCidrBlock, vpnConnectionId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateVpnConnectionRouteRequest, null, [{
    key: "initialize",
    value: function initialize(obj, destinationCidrBlock, vpnConnectionId) {
      obj['DestinationCidrBlock'] = destinationCidrBlock;
      obj['VpnConnectionId'] = vpnConnectionId;
    }
    /**
     * Constructs a <code>CreateVpnConnectionRouteRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateVpnConnectionRouteRequest} obj Optional instance to populate.
     * @return {module:model/CreateVpnConnectionRouteRequest} The populated <code>CreateVpnConnectionRouteRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateVpnConnectionRouteRequest();

        if (data.hasOwnProperty('DestinationCidrBlock')) {
          obj['DestinationCidrBlock'] = _ApiClient["default"].convertToType(data['DestinationCidrBlock'], 'String');
        }

        if (data.hasOwnProperty('VpnConnectionId')) {
          obj['VpnConnectionId'] = _ApiClient["default"].convertToType(data['VpnConnectionId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CreateVpnConnectionRouteRequest;
}();
/**
 * @member {String} DestinationCidrBlock
 */


CreateVpnConnectionRouteRequest.prototype['DestinationCidrBlock'] = undefined;
/**
 * @member {String} VpnConnectionId
 */

CreateVpnConnectionRouteRequest.prototype['VpnConnectionId'] = undefined;
var _default = CreateVpnConnectionRouteRequest;
exports["default"] = _default;