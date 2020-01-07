"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _VpnState = _interopRequireDefault(require("./VpnState"));

var _VpnStaticRouteSource = _interopRequireDefault(require("./VpnStaticRouteSource"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The VpnStaticRoute model module.
 * @module model/VpnStaticRoute
 * @version 1.1.0
 */
var VpnStaticRoute =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>VpnStaticRoute</code>.
   * Describes a static route for a VPN connection.
   * @alias module:model/VpnStaticRoute
   */
  function VpnStaticRoute() {
    _classCallCheck(this, VpnStaticRoute);

    VpnStaticRoute.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(VpnStaticRoute, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>VpnStaticRoute</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VpnStaticRoute} obj Optional instance to populate.
     * @return {module:model/VpnStaticRoute} The populated <code>VpnStaticRoute</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new VpnStaticRoute();

        if (data.hasOwnProperty('DestinationCidrBlock')) {
          obj['DestinationCidrBlock'] = _ApiClient["default"].convertToType(data['DestinationCidrBlock'], 'String');
        }

        if (data.hasOwnProperty('Source')) {
          obj['Source'] = _VpnStaticRouteSource["default"].constructFromObject(data['Source']);
        }

        if (data.hasOwnProperty('State')) {
          obj['State'] = _VpnState["default"].constructFromObject(data['State']);
        }
      }

      return obj;
    }
  }]);

  return VpnStaticRoute;
}();
/**
 * @member {String} DestinationCidrBlock
 */


VpnStaticRoute.prototype['DestinationCidrBlock'] = undefined;
/**
 * @member {module:model/VpnStaticRouteSource} Source
 */

VpnStaticRoute.prototype['Source'] = undefined;
/**
 * @member {module:model/VpnState} State
 */

VpnStaticRoute.prototype['State'] = undefined;
var _default = VpnStaticRoute;
exports["default"] = _default;