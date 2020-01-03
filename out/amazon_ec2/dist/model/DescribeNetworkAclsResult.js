"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _NetworkAcl = _interopRequireDefault(require("./NetworkAcl"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DescribeNetworkAclsResult model module.
 * @module model/DescribeNetworkAclsResult
 * @version 1.0.0
 */
var DescribeNetworkAclsResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeNetworkAclsResult</code>.
   * @alias module:model/DescribeNetworkAclsResult
   */
  function DescribeNetworkAclsResult() {
    _classCallCheck(this, DescribeNetworkAclsResult);

    DescribeNetworkAclsResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeNetworkAclsResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeNetworkAclsResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeNetworkAclsResult} obj Optional instance to populate.
     * @return {module:model/DescribeNetworkAclsResult} The populated <code>DescribeNetworkAclsResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeNetworkAclsResult();

        if (data.hasOwnProperty('NetworkAcls')) {
          obj['NetworkAcls'] = _ApiClient["default"].convertToType(data['NetworkAcls'], [_NetworkAcl["default"]]);
        }

        if (data.hasOwnProperty('NextToken')) {
          obj['NextToken'] = _ApiClient["default"].convertToType(data['NextToken'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DescribeNetworkAclsResult;
}();
/**
 * @member {Array.<module:model/NetworkAcl>} NetworkAcls
 */


DescribeNetworkAclsResult.prototype['NetworkAcls'] = undefined;
/**
 * @member {String} NextToken
 */

DescribeNetworkAclsResult.prototype['NextToken'] = undefined;
var _default = DescribeNetworkAclsResult;
exports["default"] = _default;