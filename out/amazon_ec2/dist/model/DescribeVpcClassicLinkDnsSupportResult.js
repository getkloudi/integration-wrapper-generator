"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ClassicLinkDnsSupport = _interopRequireDefault(require("./ClassicLinkDnsSupport"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DescribeVpcClassicLinkDnsSupportResult model module.
 * @module model/DescribeVpcClassicLinkDnsSupportResult
 * @version 1.0.0
 */
var DescribeVpcClassicLinkDnsSupportResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeVpcClassicLinkDnsSupportResult</code>.
   * @alias module:model/DescribeVpcClassicLinkDnsSupportResult
   */
  function DescribeVpcClassicLinkDnsSupportResult() {
    _classCallCheck(this, DescribeVpcClassicLinkDnsSupportResult);

    DescribeVpcClassicLinkDnsSupportResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeVpcClassicLinkDnsSupportResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeVpcClassicLinkDnsSupportResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeVpcClassicLinkDnsSupportResult} obj Optional instance to populate.
     * @return {module:model/DescribeVpcClassicLinkDnsSupportResult} The populated <code>DescribeVpcClassicLinkDnsSupportResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeVpcClassicLinkDnsSupportResult();

        if (data.hasOwnProperty('NextToken')) {
          obj['NextToken'] = _ApiClient["default"].convertToType(data['NextToken'], 'String');
        }

        if (data.hasOwnProperty('Vpcs')) {
          obj['Vpcs'] = _ApiClient["default"].convertToType(data['Vpcs'], [_ClassicLinkDnsSupport["default"]]);
        }
      }

      return obj;
    }
  }]);

  return DescribeVpcClassicLinkDnsSupportResult;
}();
/**
 * @member {String} NextToken
 */


DescribeVpcClassicLinkDnsSupportResult.prototype['NextToken'] = undefined;
/**
 * @member {Array.<module:model/ClassicLinkDnsSupport>} Vpcs
 */

DescribeVpcClassicLinkDnsSupportResult.prototype['Vpcs'] = undefined;
var _default = DescribeVpcClassicLinkDnsSupportResult;
exports["default"] = _default;