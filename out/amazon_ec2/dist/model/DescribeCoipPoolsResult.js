"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CoipPool = _interopRequireDefault(require("./CoipPool"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DescribeCoipPoolsResult model module.
 * @module model/DescribeCoipPoolsResult
 * @version 1.0.0
 */
var DescribeCoipPoolsResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeCoipPoolsResult</code>.
   * @alias module:model/DescribeCoipPoolsResult
   */
  function DescribeCoipPoolsResult() {
    _classCallCheck(this, DescribeCoipPoolsResult);

    DescribeCoipPoolsResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeCoipPoolsResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeCoipPoolsResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeCoipPoolsResult} obj Optional instance to populate.
     * @return {module:model/DescribeCoipPoolsResult} The populated <code>DescribeCoipPoolsResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeCoipPoolsResult();

        if (data.hasOwnProperty('CoipPools')) {
          obj['CoipPools'] = _ApiClient["default"].convertToType(data['CoipPools'], [_CoipPool["default"]]);
        }

        if (data.hasOwnProperty('NextToken')) {
          obj['NextToken'] = _ApiClient["default"].convertToType(data['NextToken'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DescribeCoipPoolsResult;
}();
/**
 * @member {Array.<module:model/CoipPool>} CoipPools
 */


DescribeCoipPoolsResult.prototype['CoipPools'] = undefined;
/**
 * @member {String} NextToken
 */

DescribeCoipPoolsResult.prototype['NextToken'] = undefined;
var _default = DescribeCoipPoolsResult;
exports["default"] = _default;