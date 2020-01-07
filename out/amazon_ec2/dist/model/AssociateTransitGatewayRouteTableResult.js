"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TransitGatewayAssociation = _interopRequireDefault(require("./TransitGatewayAssociation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The AssociateTransitGatewayRouteTableResult model module.
 * @module model/AssociateTransitGatewayRouteTableResult
 * @version 1.1.0
 */
var AssociateTransitGatewayRouteTableResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>AssociateTransitGatewayRouteTableResult</code>.
   * @alias module:model/AssociateTransitGatewayRouteTableResult
   */
  function AssociateTransitGatewayRouteTableResult() {
    _classCallCheck(this, AssociateTransitGatewayRouteTableResult);

    AssociateTransitGatewayRouteTableResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AssociateTransitGatewayRouteTableResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AssociateTransitGatewayRouteTableResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AssociateTransitGatewayRouteTableResult} obj Optional instance to populate.
     * @return {module:model/AssociateTransitGatewayRouteTableResult} The populated <code>AssociateTransitGatewayRouteTableResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AssociateTransitGatewayRouteTableResult();

        if (data.hasOwnProperty('Association')) {
          obj['Association'] = _TransitGatewayAssociation["default"].constructFromObject(data['Association']);
        }
      }

      return obj;
    }
  }]);

  return AssociateTransitGatewayRouteTableResult;
}();
/**
 * @member {module:model/TransitGatewayAssociation} Association
 */


AssociateTransitGatewayRouteTableResult.prototype['Association'] = undefined;
var _default = AssociateTransitGatewayRouteTableResult;
exports["default"] = _default;