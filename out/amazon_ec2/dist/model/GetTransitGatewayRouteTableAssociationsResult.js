"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TransitGatewayRouteTableAssociation = _interopRequireDefault(require("./TransitGatewayRouteTableAssociation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The GetTransitGatewayRouteTableAssociationsResult model module.
 * @module model/GetTransitGatewayRouteTableAssociationsResult
 * @version 1.1.0
 */
var GetTransitGatewayRouteTableAssociationsResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>GetTransitGatewayRouteTableAssociationsResult</code>.
   * @alias module:model/GetTransitGatewayRouteTableAssociationsResult
   */
  function GetTransitGatewayRouteTableAssociationsResult() {
    _classCallCheck(this, GetTransitGatewayRouteTableAssociationsResult);

    GetTransitGatewayRouteTableAssociationsResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GetTransitGatewayRouteTableAssociationsResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GetTransitGatewayRouteTableAssociationsResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTransitGatewayRouteTableAssociationsResult} obj Optional instance to populate.
     * @return {module:model/GetTransitGatewayRouteTableAssociationsResult} The populated <code>GetTransitGatewayRouteTableAssociationsResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GetTransitGatewayRouteTableAssociationsResult();

        if (data.hasOwnProperty('Associations')) {
          obj['Associations'] = _ApiClient["default"].convertToType(data['Associations'], [_TransitGatewayRouteTableAssociation["default"]]);
        }

        if (data.hasOwnProperty('NextToken')) {
          obj['NextToken'] = _ApiClient["default"].convertToType(data['NextToken'], 'String');
        }
      }

      return obj;
    }
  }]);

  return GetTransitGatewayRouteTableAssociationsResult;
}();
/**
 * @member {Array.<module:model/TransitGatewayRouteTableAssociation>} Associations
 */


GetTransitGatewayRouteTableAssociationsResult.prototype['Associations'] = undefined;
/**
 * @member {String} NextToken
 */

GetTransitGatewayRouteTableAssociationsResult.prototype['NextToken'] = undefined;
var _default = GetTransitGatewayRouteTableAssociationsResult;
exports["default"] = _default;