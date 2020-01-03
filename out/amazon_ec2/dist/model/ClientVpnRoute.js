"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ClientVpnRouteStatus = _interopRequireDefault(require("./ClientVpnRouteStatus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ClientVpnRoute model module.
 * @module model/ClientVpnRoute
 * @version 1.0.0
 */
var ClientVpnRoute =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ClientVpnRoute</code>.
   * Information about a Client VPN endpoint route.
   * @alias module:model/ClientVpnRoute
   */
  function ClientVpnRoute() {
    _classCallCheck(this, ClientVpnRoute);

    ClientVpnRoute.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ClientVpnRoute, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ClientVpnRoute</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ClientVpnRoute} obj Optional instance to populate.
     * @return {module:model/ClientVpnRoute} The populated <code>ClientVpnRoute</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ClientVpnRoute();

        if (data.hasOwnProperty('ClientVpnEndpointId')) {
          obj['ClientVpnEndpointId'] = _ApiClient["default"].convertToType(data['ClientVpnEndpointId'], 'String');
        }

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('DestinationCidr')) {
          obj['DestinationCidr'] = _ApiClient["default"].convertToType(data['DestinationCidr'], 'String');
        }

        if (data.hasOwnProperty('Origin')) {
          obj['Origin'] = _ApiClient["default"].convertToType(data['Origin'], 'String');
        }

        if (data.hasOwnProperty('Status')) {
          obj['Status'] = _ClientVpnRouteStatus["default"].constructFromObject(data['Status']);
        }

        if (data.hasOwnProperty('TargetSubnet')) {
          obj['TargetSubnet'] = _ApiClient["default"].convertToType(data['TargetSubnet'], 'String');
        }

        if (data.hasOwnProperty('Type')) {
          obj['Type'] = _ApiClient["default"].convertToType(data['Type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ClientVpnRoute;
}();
/**
 * @member {String} ClientVpnEndpointId
 */


ClientVpnRoute.prototype['ClientVpnEndpointId'] = undefined;
/**
 * @member {String} Description
 */

ClientVpnRoute.prototype['Description'] = undefined;
/**
 * @member {String} DestinationCidr
 */

ClientVpnRoute.prototype['DestinationCidr'] = undefined;
/**
 * @member {String} Origin
 */

ClientVpnRoute.prototype['Origin'] = undefined;
/**
 * @member {module:model/ClientVpnRouteStatus} Status
 */

ClientVpnRoute.prototype['Status'] = undefined;
/**
 * @member {String} TargetSubnet
 */

ClientVpnRoute.prototype['TargetSubnet'] = undefined;
/**
 * @member {String} Type
 */

ClientVpnRoute.prototype['Type'] = undefined;
var _default = ClientVpnRoute;
exports["default"] = _default;