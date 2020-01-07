"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GatewayType = _interopRequireDefault(require("./GatewayType"));

var _Tag = _interopRequireDefault(require("./Tag"));

var _VgwTelemetry = _interopRequireDefault(require("./VgwTelemetry"));

var _VpnConnectionOptions = _interopRequireDefault(require("./VpnConnectionOptions"));

var _VpnState = _interopRequireDefault(require("./VpnState"));

var _VpnStaticRoute = _interopRequireDefault(require("./VpnStaticRoute"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The VpnConnection model module.
 * @module model/VpnConnection
 * @version 1.1.0
 */
var VpnConnection =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>VpnConnection</code>.
   * Describes a VPN connection.
   * @alias module:model/VpnConnection
   */
  function VpnConnection() {
    _classCallCheck(this, VpnConnection);

    VpnConnection.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(VpnConnection, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>VpnConnection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VpnConnection} obj Optional instance to populate.
     * @return {module:model/VpnConnection} The populated <code>VpnConnection</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new VpnConnection();

        if (data.hasOwnProperty('Category')) {
          obj['Category'] = _ApiClient["default"].convertToType(data['Category'], 'String');
        }

        if (data.hasOwnProperty('CustomerGatewayConfiguration')) {
          obj['CustomerGatewayConfiguration'] = _ApiClient["default"].convertToType(data['CustomerGatewayConfiguration'], 'String');
        }

        if (data.hasOwnProperty('CustomerGatewayId')) {
          obj['CustomerGatewayId'] = _ApiClient["default"].convertToType(data['CustomerGatewayId'], 'String');
        }

        if (data.hasOwnProperty('Options')) {
          obj['Options'] = _VpnConnectionOptions["default"].constructFromObject(data['Options']);
        }

        if (data.hasOwnProperty('Routes')) {
          obj['Routes'] = _ApiClient["default"].convertToType(data['Routes'], [_VpnStaticRoute["default"]]);
        }

        if (data.hasOwnProperty('State')) {
          obj['State'] = _VpnState["default"].constructFromObject(data['State']);
        }

        if (data.hasOwnProperty('Tags')) {
          obj['Tags'] = _ApiClient["default"].convertToType(data['Tags'], [_Tag["default"]]);
        }

        if (data.hasOwnProperty('TransitGatewayId')) {
          obj['TransitGatewayId'] = _ApiClient["default"].convertToType(data['TransitGatewayId'], 'String');
        }

        if (data.hasOwnProperty('Type')) {
          obj['Type'] = _GatewayType["default"].constructFromObject(data['Type']);
        }

        if (data.hasOwnProperty('VgwTelemetry')) {
          obj['VgwTelemetry'] = _ApiClient["default"].convertToType(data['VgwTelemetry'], [_VgwTelemetry["default"]]);
        }

        if (data.hasOwnProperty('VpnConnectionId')) {
          obj['VpnConnectionId'] = _ApiClient["default"].convertToType(data['VpnConnectionId'], 'String');
        }

        if (data.hasOwnProperty('VpnGatewayId')) {
          obj['VpnGatewayId'] = _ApiClient["default"].convertToType(data['VpnGatewayId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return VpnConnection;
}();
/**
 * @member {String} Category
 */


VpnConnection.prototype['Category'] = undefined;
/**
 * @member {String} CustomerGatewayConfiguration
 */

VpnConnection.prototype['CustomerGatewayConfiguration'] = undefined;
/**
 * @member {String} CustomerGatewayId
 */

VpnConnection.prototype['CustomerGatewayId'] = undefined;
/**
 * @member {module:model/VpnConnectionOptions} Options
 */

VpnConnection.prototype['Options'] = undefined;
/**
 * @member {Array.<module:model/VpnStaticRoute>} Routes
 */

VpnConnection.prototype['Routes'] = undefined;
/**
 * @member {module:model/VpnState} State
 */

VpnConnection.prototype['State'] = undefined;
/**
 * @member {Array.<module:model/Tag>} Tags
 */

VpnConnection.prototype['Tags'] = undefined;
/**
 * @member {String} TransitGatewayId
 */

VpnConnection.prototype['TransitGatewayId'] = undefined;
/**
 * @member {module:model/GatewayType} Type
 */

VpnConnection.prototype['Type'] = undefined;
/**
 * @member {Array.<module:model/VgwTelemetry>} VgwTelemetry
 */

VpnConnection.prototype['VgwTelemetry'] = undefined;
/**
 * @member {String} VpnConnectionId
 */

VpnConnection.prototype['VpnConnectionId'] = undefined;
/**
 * @member {String} VpnGatewayId
 */

VpnConnection.prototype['VpnGatewayId'] = undefined;
var _default = VpnConnection;
exports["default"] = _default;