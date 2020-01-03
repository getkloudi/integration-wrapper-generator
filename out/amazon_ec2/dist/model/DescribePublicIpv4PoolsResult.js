"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PublicIpv4Pool = _interopRequireDefault(require("./PublicIpv4Pool"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DescribePublicIpv4PoolsResult model module.
 * @module model/DescribePublicIpv4PoolsResult
 * @version 1.0.0
 */
var DescribePublicIpv4PoolsResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribePublicIpv4PoolsResult</code>.
   * @alias module:model/DescribePublicIpv4PoolsResult
   */
  function DescribePublicIpv4PoolsResult() {
    _classCallCheck(this, DescribePublicIpv4PoolsResult);

    DescribePublicIpv4PoolsResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribePublicIpv4PoolsResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribePublicIpv4PoolsResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribePublicIpv4PoolsResult} obj Optional instance to populate.
     * @return {module:model/DescribePublicIpv4PoolsResult} The populated <code>DescribePublicIpv4PoolsResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribePublicIpv4PoolsResult();

        if (data.hasOwnProperty('NextToken')) {
          obj['NextToken'] = _ApiClient["default"].convertToType(data['NextToken'], 'String');
        }

        if (data.hasOwnProperty('PublicIpv4Pools')) {
          obj['PublicIpv4Pools'] = _ApiClient["default"].convertToType(data['PublicIpv4Pools'], [_PublicIpv4Pool["default"]]);
        }
      }

      return obj;
    }
  }]);

  return DescribePublicIpv4PoolsResult;
}();
/**
 * @member {String} NextToken
 */


DescribePublicIpv4PoolsResult.prototype['NextToken'] = undefined;
/**
 * @member {Array.<module:model/PublicIpv4Pool>} PublicIpv4Pools
 */

DescribePublicIpv4PoolsResult.prototype['PublicIpv4Pools'] = undefined;
var _default = DescribePublicIpv4PoolsResult;
exports["default"] = _default;