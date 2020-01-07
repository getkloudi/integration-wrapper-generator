"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TransitGatewayPropagation = _interopRequireDefault(require("./TransitGatewayPropagation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DisableTransitGatewayRouteTablePropagationResult model module.
 * @module model/DisableTransitGatewayRouteTablePropagationResult
 * @version 1.1.0
 */
var DisableTransitGatewayRouteTablePropagationResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DisableTransitGatewayRouteTablePropagationResult</code>.
   * @alias module:model/DisableTransitGatewayRouteTablePropagationResult
   */
  function DisableTransitGatewayRouteTablePropagationResult() {
    _classCallCheck(this, DisableTransitGatewayRouteTablePropagationResult);

    DisableTransitGatewayRouteTablePropagationResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DisableTransitGatewayRouteTablePropagationResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DisableTransitGatewayRouteTablePropagationResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DisableTransitGatewayRouteTablePropagationResult} obj Optional instance to populate.
     * @return {module:model/DisableTransitGatewayRouteTablePropagationResult} The populated <code>DisableTransitGatewayRouteTablePropagationResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DisableTransitGatewayRouteTablePropagationResult();

        if (data.hasOwnProperty('Propagation')) {
          obj['Propagation'] = _TransitGatewayPropagation["default"].constructFromObject(data['Propagation']);
        }
      }

      return obj;
    }
  }]);

  return DisableTransitGatewayRouteTablePropagationResult;
}();
/**
 * @member {module:model/TransitGatewayPropagation} Propagation
 */


DisableTransitGatewayRouteTablePropagationResult.prototype['Propagation'] = undefined;
var _default = DisableTransitGatewayRouteTablePropagationResult;
exports["default"] = _default;