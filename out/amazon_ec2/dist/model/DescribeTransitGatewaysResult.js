"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TransitGateway = _interopRequireDefault(require("./TransitGateway"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DescribeTransitGatewaysResult model module.
 * @module model/DescribeTransitGatewaysResult
 * @version 1.0.0
 */
var DescribeTransitGatewaysResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeTransitGatewaysResult</code>.
   * @alias module:model/DescribeTransitGatewaysResult
   */
  function DescribeTransitGatewaysResult() {
    _classCallCheck(this, DescribeTransitGatewaysResult);

    DescribeTransitGatewaysResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeTransitGatewaysResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeTransitGatewaysResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeTransitGatewaysResult} obj Optional instance to populate.
     * @return {module:model/DescribeTransitGatewaysResult} The populated <code>DescribeTransitGatewaysResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeTransitGatewaysResult();

        if (data.hasOwnProperty('NextToken')) {
          obj['NextToken'] = _ApiClient["default"].convertToType(data['NextToken'], 'String');
        }

        if (data.hasOwnProperty('TransitGateways')) {
          obj['TransitGateways'] = _ApiClient["default"].convertToType(data['TransitGateways'], [_TransitGateway["default"]]);
        }
      }

      return obj;
    }
  }]);

  return DescribeTransitGatewaysResult;
}();
/**
 * @member {String} NextToken
 */


DescribeTransitGatewaysResult.prototype['NextToken'] = undefined;
/**
 * @member {Array.<module:model/TransitGateway>} TransitGateways
 */

DescribeTransitGatewaysResult.prototype['TransitGateways'] = undefined;
var _default = DescribeTransitGatewaysResult;
exports["default"] = _default;