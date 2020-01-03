"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CustomerGateway = _interopRequireDefault(require("./CustomerGateway"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DescribeCustomerGatewaysResult model module.
 * @module model/DescribeCustomerGatewaysResult
 * @version 1.0.0
 */
var DescribeCustomerGatewaysResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeCustomerGatewaysResult</code>.
   * Contains the output of DescribeCustomerGateways.
   * @alias module:model/DescribeCustomerGatewaysResult
   */
  function DescribeCustomerGatewaysResult() {
    _classCallCheck(this, DescribeCustomerGatewaysResult);

    DescribeCustomerGatewaysResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeCustomerGatewaysResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeCustomerGatewaysResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeCustomerGatewaysResult} obj Optional instance to populate.
     * @return {module:model/DescribeCustomerGatewaysResult} The populated <code>DescribeCustomerGatewaysResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeCustomerGatewaysResult();

        if (data.hasOwnProperty('CustomerGateways')) {
          obj['CustomerGateways'] = _ApiClient["default"].convertToType(data['CustomerGateways'], [_CustomerGateway["default"]]);
        }
      }

      return obj;
    }
  }]);

  return DescribeCustomerGatewaysResult;
}();
/**
 * @member {Array.<module:model/CustomerGateway>} CustomerGateways
 */


DescribeCustomerGatewaysResult.prototype['CustomerGateways'] = undefined;
var _default = DescribeCustomerGatewaysResult;
exports["default"] = _default;