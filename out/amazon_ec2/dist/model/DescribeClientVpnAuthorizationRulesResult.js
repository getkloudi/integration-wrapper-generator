"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AuthorizationRule = _interopRequireDefault(require("./AuthorizationRule"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DescribeClientVpnAuthorizationRulesResult model module.
 * @module model/DescribeClientVpnAuthorizationRulesResult
 * @version 1.1.0
 */
var DescribeClientVpnAuthorizationRulesResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeClientVpnAuthorizationRulesResult</code>.
   * @alias module:model/DescribeClientVpnAuthorizationRulesResult
   */
  function DescribeClientVpnAuthorizationRulesResult() {
    _classCallCheck(this, DescribeClientVpnAuthorizationRulesResult);

    DescribeClientVpnAuthorizationRulesResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeClientVpnAuthorizationRulesResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeClientVpnAuthorizationRulesResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeClientVpnAuthorizationRulesResult} obj Optional instance to populate.
     * @return {module:model/DescribeClientVpnAuthorizationRulesResult} The populated <code>DescribeClientVpnAuthorizationRulesResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeClientVpnAuthorizationRulesResult();

        if (data.hasOwnProperty('AuthorizationRules')) {
          obj['AuthorizationRules'] = _ApiClient["default"].convertToType(data['AuthorizationRules'], [_AuthorizationRule["default"]]);
        }

        if (data.hasOwnProperty('NextToken')) {
          obj['NextToken'] = _ApiClient["default"].convertToType(data['NextToken'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DescribeClientVpnAuthorizationRulesResult;
}();
/**
 * @member {Array.<module:model/AuthorizationRule>} AuthorizationRules
 */


DescribeClientVpnAuthorizationRulesResult.prototype['AuthorizationRules'] = undefined;
/**
 * @member {String} NextToken
 */

DescribeClientVpnAuthorizationRulesResult.prototype['NextToken'] = undefined;
var _default = DescribeClientVpnAuthorizationRulesResult;
exports["default"] = _default;