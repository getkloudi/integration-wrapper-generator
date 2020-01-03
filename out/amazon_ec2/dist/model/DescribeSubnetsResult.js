"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Subnet = _interopRequireDefault(require("./Subnet"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DescribeSubnetsResult model module.
 * @module model/DescribeSubnetsResult
 * @version 1.0.0
 */
var DescribeSubnetsResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeSubnetsResult</code>.
   * @alias module:model/DescribeSubnetsResult
   */
  function DescribeSubnetsResult() {
    _classCallCheck(this, DescribeSubnetsResult);

    DescribeSubnetsResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeSubnetsResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeSubnetsResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeSubnetsResult} obj Optional instance to populate.
     * @return {module:model/DescribeSubnetsResult} The populated <code>DescribeSubnetsResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeSubnetsResult();

        if (data.hasOwnProperty('NextToken')) {
          obj['NextToken'] = _ApiClient["default"].convertToType(data['NextToken'], 'String');
        }

        if (data.hasOwnProperty('Subnets')) {
          obj['Subnets'] = _ApiClient["default"].convertToType(data['Subnets'], [_Subnet["default"]]);
        }
      }

      return obj;
    }
  }]);

  return DescribeSubnetsResult;
}();
/**
 * @member {String} NextToken
 */


DescribeSubnetsResult.prototype['NextToken'] = undefined;
/**
 * @member {Array.<module:model/Subnet>} Subnets
 */

DescribeSubnetsResult.prototype['Subnets'] = undefined;
var _default = DescribeSubnetsResult;
exports["default"] = _default;