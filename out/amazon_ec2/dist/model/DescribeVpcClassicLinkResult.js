"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _VpcClassicLink = _interopRequireDefault(require("./VpcClassicLink"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DescribeVpcClassicLinkResult model module.
 * @module model/DescribeVpcClassicLinkResult
 * @version 1.0.0
 */
var DescribeVpcClassicLinkResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeVpcClassicLinkResult</code>.
   * @alias module:model/DescribeVpcClassicLinkResult
   */
  function DescribeVpcClassicLinkResult() {
    _classCallCheck(this, DescribeVpcClassicLinkResult);

    DescribeVpcClassicLinkResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeVpcClassicLinkResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeVpcClassicLinkResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeVpcClassicLinkResult} obj Optional instance to populate.
     * @return {module:model/DescribeVpcClassicLinkResult} The populated <code>DescribeVpcClassicLinkResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeVpcClassicLinkResult();

        if (data.hasOwnProperty('Vpcs')) {
          obj['Vpcs'] = _ApiClient["default"].convertToType(data['Vpcs'], [_VpcClassicLink["default"]]);
        }
      }

      return obj;
    }
  }]);

  return DescribeVpcClassicLinkResult;
}();
/**
 * @member {Array.<module:model/VpcClassicLink>} Vpcs
 */


DescribeVpcClassicLinkResult.prototype['Vpcs'] = undefined;
var _default = DescribeVpcClassicLinkResult;
exports["default"] = _default;