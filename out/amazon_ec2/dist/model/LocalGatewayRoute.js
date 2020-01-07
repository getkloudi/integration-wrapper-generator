"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LocalGatewayRouteState = _interopRequireDefault(require("./LocalGatewayRouteState"));

var _LocalGatewayRouteType = _interopRequireDefault(require("./LocalGatewayRouteType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LocalGatewayRoute model module.
 * @module model/LocalGatewayRoute
 * @version 1.1.0
 */
var LocalGatewayRoute =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>LocalGatewayRoute</code>.
   * Describes a route for a local gateway route table.
   * @alias module:model/LocalGatewayRoute
   */
  function LocalGatewayRoute() {
    _classCallCheck(this, LocalGatewayRoute);

    LocalGatewayRoute.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LocalGatewayRoute, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LocalGatewayRoute</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LocalGatewayRoute} obj Optional instance to populate.
     * @return {module:model/LocalGatewayRoute} The populated <code>LocalGatewayRoute</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LocalGatewayRoute();

        if (data.hasOwnProperty('DestinationCidrBlock')) {
          obj['DestinationCidrBlock'] = _ApiClient["default"].convertToType(data['DestinationCidrBlock'], 'String');
        }

        if (data.hasOwnProperty('LocalGatewayRouteTableId')) {
          obj['LocalGatewayRouteTableId'] = _ApiClient["default"].convertToType(data['LocalGatewayRouteTableId'], 'String');
        }

        if (data.hasOwnProperty('LocalGatewayVirtualInterfaceGroupId')) {
          obj['LocalGatewayVirtualInterfaceGroupId'] = _ApiClient["default"].convertToType(data['LocalGatewayVirtualInterfaceGroupId'], 'String');
        }

        if (data.hasOwnProperty('State')) {
          obj['State'] = _LocalGatewayRouteState["default"].constructFromObject(data['State']);
        }

        if (data.hasOwnProperty('Type')) {
          obj['Type'] = _LocalGatewayRouteType["default"].constructFromObject(data['Type']);
        }
      }

      return obj;
    }
  }]);

  return LocalGatewayRoute;
}();
/**
 * @member {String} DestinationCidrBlock
 */


LocalGatewayRoute.prototype['DestinationCidrBlock'] = undefined;
/**
 * @member {String} LocalGatewayRouteTableId
 */

LocalGatewayRoute.prototype['LocalGatewayRouteTableId'] = undefined;
/**
 * @member {String} LocalGatewayVirtualInterfaceGroupId
 */

LocalGatewayRoute.prototype['LocalGatewayVirtualInterfaceGroupId'] = undefined;
/**
 * @member {module:model/LocalGatewayRouteState} State
 */

LocalGatewayRoute.prototype['State'] = undefined;
/**
 * @member {module:model/LocalGatewayRouteType} Type
 */

LocalGatewayRoute.prototype['Type'] = undefined;
var _default = LocalGatewayRoute;
exports["default"] = _default;