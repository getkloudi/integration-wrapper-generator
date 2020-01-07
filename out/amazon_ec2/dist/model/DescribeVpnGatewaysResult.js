"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _VpnGateway = _interopRequireDefault(require("./VpnGateway"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DescribeVpnGatewaysResult model module.
 * @module model/DescribeVpnGatewaysResult
 * @version 1.1.0
 */
var DescribeVpnGatewaysResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeVpnGatewaysResult</code>.
   * Contains the output of DescribeVpnGateways.
   * @alias module:model/DescribeVpnGatewaysResult
   */
  function DescribeVpnGatewaysResult() {
    _classCallCheck(this, DescribeVpnGatewaysResult);

    DescribeVpnGatewaysResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeVpnGatewaysResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeVpnGatewaysResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeVpnGatewaysResult} obj Optional instance to populate.
     * @return {module:model/DescribeVpnGatewaysResult} The populated <code>DescribeVpnGatewaysResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeVpnGatewaysResult();

        if (data.hasOwnProperty('VpnGateways')) {
          obj['VpnGateways'] = _ApiClient["default"].convertToType(data['VpnGateways'], [_VpnGateway["default"]]);
        }
      }

      return obj;
    }
  }]);

  return DescribeVpnGatewaysResult;
}();
/**
 * @member {Array.<module:model/VpnGateway>} VpnGateways
 */


DescribeVpnGatewaysResult.prototype['VpnGateways'] = undefined;
var _default = DescribeVpnGatewaysResult;
exports["default"] = _default;