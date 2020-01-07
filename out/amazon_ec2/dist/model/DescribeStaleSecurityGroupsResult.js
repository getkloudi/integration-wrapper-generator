"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _StaleSecurityGroup = _interopRequireDefault(require("./StaleSecurityGroup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DescribeStaleSecurityGroupsResult model module.
 * @module model/DescribeStaleSecurityGroupsResult
 * @version 1.1.0
 */
var DescribeStaleSecurityGroupsResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeStaleSecurityGroupsResult</code>.
   * @alias module:model/DescribeStaleSecurityGroupsResult
   */
  function DescribeStaleSecurityGroupsResult() {
    _classCallCheck(this, DescribeStaleSecurityGroupsResult);

    DescribeStaleSecurityGroupsResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeStaleSecurityGroupsResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeStaleSecurityGroupsResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeStaleSecurityGroupsResult} obj Optional instance to populate.
     * @return {module:model/DescribeStaleSecurityGroupsResult} The populated <code>DescribeStaleSecurityGroupsResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeStaleSecurityGroupsResult();

        if (data.hasOwnProperty('NextToken')) {
          obj['NextToken'] = _ApiClient["default"].convertToType(data['NextToken'], 'String');
        }

        if (data.hasOwnProperty('StaleSecurityGroupSet')) {
          obj['StaleSecurityGroupSet'] = _ApiClient["default"].convertToType(data['StaleSecurityGroupSet'], [_StaleSecurityGroup["default"]]);
        }
      }

      return obj;
    }
  }]);

  return DescribeStaleSecurityGroupsResult;
}();
/**
 * @member {String} NextToken
 */


DescribeStaleSecurityGroupsResult.prototype['NextToken'] = undefined;
/**
 * @member {Array.<module:model/StaleSecurityGroup>} StaleSecurityGroupSet
 */

DescribeStaleSecurityGroupsResult.prototype['StaleSecurityGroupSet'] = undefined;
var _default = DescribeStaleSecurityGroupsResult;
exports["default"] = _default;