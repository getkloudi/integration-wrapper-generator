"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TransitGatewayRouteTable = _interopRequireDefault(require("./TransitGatewayRouteTable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DescribeTransitGatewayRouteTablesResult model module.
 * @module model/DescribeTransitGatewayRouteTablesResult
 * @version 1.1.0
 */
var DescribeTransitGatewayRouteTablesResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeTransitGatewayRouteTablesResult</code>.
   * @alias module:model/DescribeTransitGatewayRouteTablesResult
   */
  function DescribeTransitGatewayRouteTablesResult() {
    _classCallCheck(this, DescribeTransitGatewayRouteTablesResult);

    DescribeTransitGatewayRouteTablesResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeTransitGatewayRouteTablesResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeTransitGatewayRouteTablesResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeTransitGatewayRouteTablesResult} obj Optional instance to populate.
     * @return {module:model/DescribeTransitGatewayRouteTablesResult} The populated <code>DescribeTransitGatewayRouteTablesResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeTransitGatewayRouteTablesResult();

        if (data.hasOwnProperty('NextToken')) {
          obj['NextToken'] = _ApiClient["default"].convertToType(data['NextToken'], 'String');
        }

        if (data.hasOwnProperty('TransitGatewayRouteTables')) {
          obj['TransitGatewayRouteTables'] = _ApiClient["default"].convertToType(data['TransitGatewayRouteTables'], [_TransitGatewayRouteTable["default"]]);
        }
      }

      return obj;
    }
  }]);

  return DescribeTransitGatewayRouteTablesResult;
}();
/**
 * @member {String} NextToken
 */


DescribeTransitGatewayRouteTablesResult.prototype['NextToken'] = undefined;
/**
 * @member {Array.<module:model/TransitGatewayRouteTable>} TransitGatewayRouteTables
 */

DescribeTransitGatewayRouteTablesResult.prototype['TransitGatewayRouteTables'] = undefined;
var _default = DescribeTransitGatewayRouteTablesResult;
exports["default"] = _default;