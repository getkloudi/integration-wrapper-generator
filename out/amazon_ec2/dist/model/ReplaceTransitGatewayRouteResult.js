"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TransitGatewayRoute = _interopRequireDefault(require("./TransitGatewayRoute"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ReplaceTransitGatewayRouteResult model module.
 * @module model/ReplaceTransitGatewayRouteResult
 * @version 1.0.0
 */
var ReplaceTransitGatewayRouteResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ReplaceTransitGatewayRouteResult</code>.
   * @alias module:model/ReplaceTransitGatewayRouteResult
   */
  function ReplaceTransitGatewayRouteResult() {
    _classCallCheck(this, ReplaceTransitGatewayRouteResult);

    ReplaceTransitGatewayRouteResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ReplaceTransitGatewayRouteResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ReplaceTransitGatewayRouteResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReplaceTransitGatewayRouteResult} obj Optional instance to populate.
     * @return {module:model/ReplaceTransitGatewayRouteResult} The populated <code>ReplaceTransitGatewayRouteResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ReplaceTransitGatewayRouteResult();

        if (data.hasOwnProperty('Route')) {
          obj['Route'] = _TransitGatewayRoute["default"].constructFromObject(data['Route']);
        }
      }

      return obj;
    }
  }]);

  return ReplaceTransitGatewayRouteResult;
}();
/**
 * @member {module:model/TransitGatewayRoute} Route
 */


ReplaceTransitGatewayRouteResult.prototype['Route'] = undefined;
var _default = ReplaceTransitGatewayRouteResult;
exports["default"] = _default;