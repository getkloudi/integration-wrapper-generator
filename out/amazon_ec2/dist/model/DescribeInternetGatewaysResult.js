"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InternetGateway = _interopRequireDefault(require("./InternetGateway"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DescribeInternetGatewaysResult model module.
 * @module model/DescribeInternetGatewaysResult
 * @version 1.0.0
 */
var DescribeInternetGatewaysResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeInternetGatewaysResult</code>.
   * @alias module:model/DescribeInternetGatewaysResult
   */
  function DescribeInternetGatewaysResult() {
    _classCallCheck(this, DescribeInternetGatewaysResult);

    DescribeInternetGatewaysResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeInternetGatewaysResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeInternetGatewaysResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeInternetGatewaysResult} obj Optional instance to populate.
     * @return {module:model/DescribeInternetGatewaysResult} The populated <code>DescribeInternetGatewaysResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeInternetGatewaysResult();

        if (data.hasOwnProperty('InternetGateways')) {
          obj['InternetGateways'] = _ApiClient["default"].convertToType(data['InternetGateways'], [_InternetGateway["default"]]);
        }

        if (data.hasOwnProperty('NextToken')) {
          obj['NextToken'] = _ApiClient["default"].convertToType(data['NextToken'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DescribeInternetGatewaysResult;
}();
/**
 * @member {Array.<module:model/InternetGateway>} InternetGateways
 */


DescribeInternetGatewaysResult.prototype['InternetGateways'] = undefined;
/**
 * @member {String} NextToken
 */

DescribeInternetGatewaysResult.prototype['NextToken'] = undefined;
var _default = DescribeInternetGatewaysResult;
exports["default"] = _default;