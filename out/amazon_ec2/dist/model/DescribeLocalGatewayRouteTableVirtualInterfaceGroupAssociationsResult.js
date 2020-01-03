"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _LocalGatewayRouteTableVirtualInterfaceGroupAssociation = _interopRequireDefault(require("./LocalGatewayRouteTableVirtualInterfaceGroupAssociation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResult model module.
 * @module model/DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResult
 * @version 1.0.0
 */
var DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResult</code>.
   * @alias module:model/DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResult
   */
  function DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResult() {
    _classCallCheck(this, DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResult);

    DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResult} obj Optional instance to populate.
     * @return {module:model/DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResult} The populated <code>DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResult();

        if (data.hasOwnProperty('LocalGatewayRouteTableVirtualInterfaceGroupAssociations')) {
          obj['LocalGatewayRouteTableVirtualInterfaceGroupAssociations'] = _ApiClient["default"].convertToType(data['LocalGatewayRouteTableVirtualInterfaceGroupAssociations'], [_LocalGatewayRouteTableVirtualInterfaceGroupAssociation["default"]]);
        }

        if (data.hasOwnProperty('NextToken')) {
          obj['NextToken'] = _ApiClient["default"].convertToType(data['NextToken'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResult;
}();
/**
 * @member {Array.<module:model/LocalGatewayRouteTableVirtualInterfaceGroupAssociation>} LocalGatewayRouteTableVirtualInterfaceGroupAssociations
 */


DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResult.prototype['LocalGatewayRouteTableVirtualInterfaceGroupAssociations'] = undefined;
/**
 * @member {String} NextToken
 */

DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResult.prototype['NextToken'] = undefined;
var _default = DescribeLocalGatewayRouteTableVirtualInterfaceGroupAssociationsResult;
exports["default"] = _default;