"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _NatGateway = _interopRequireDefault(require("./NatGateway"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DescribeNatGatewaysResult model module.
 * @module model/DescribeNatGatewaysResult
 * @version 1.0.0
 */
var DescribeNatGatewaysResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeNatGatewaysResult</code>.
   * @alias module:model/DescribeNatGatewaysResult
   */
  function DescribeNatGatewaysResult() {
    _classCallCheck(this, DescribeNatGatewaysResult);

    DescribeNatGatewaysResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeNatGatewaysResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeNatGatewaysResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeNatGatewaysResult} obj Optional instance to populate.
     * @return {module:model/DescribeNatGatewaysResult} The populated <code>DescribeNatGatewaysResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeNatGatewaysResult();

        if (data.hasOwnProperty('NatGateways')) {
          obj['NatGateways'] = _ApiClient["default"].convertToType(data['NatGateways'], [_NatGateway["default"]]);
        }

        if (data.hasOwnProperty('NextToken')) {
          obj['NextToken'] = _ApiClient["default"].convertToType(data['NextToken'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DescribeNatGatewaysResult;
}();
/**
 * @member {Array.<module:model/NatGateway>} NatGateways
 */


DescribeNatGatewaysResult.prototype['NatGateways'] = undefined;
/**
 * @member {String} NextToken
 */

DescribeNatGatewaysResult.prototype['NextToken'] = undefined;
var _default = DescribeNatGatewaysResult;
exports["default"] = _default;