"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AllowedPrincipal = _interopRequireDefault(require("./AllowedPrincipal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DescribeVpcEndpointServicePermissionsResult model module.
 * @module model/DescribeVpcEndpointServicePermissionsResult
 * @version 1.1.0
 */
var DescribeVpcEndpointServicePermissionsResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeVpcEndpointServicePermissionsResult</code>.
   * @alias module:model/DescribeVpcEndpointServicePermissionsResult
   */
  function DescribeVpcEndpointServicePermissionsResult() {
    _classCallCheck(this, DescribeVpcEndpointServicePermissionsResult);

    DescribeVpcEndpointServicePermissionsResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeVpcEndpointServicePermissionsResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeVpcEndpointServicePermissionsResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeVpcEndpointServicePermissionsResult} obj Optional instance to populate.
     * @return {module:model/DescribeVpcEndpointServicePermissionsResult} The populated <code>DescribeVpcEndpointServicePermissionsResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeVpcEndpointServicePermissionsResult();

        if (data.hasOwnProperty('AllowedPrincipals')) {
          obj['AllowedPrincipals'] = _ApiClient["default"].convertToType(data['AllowedPrincipals'], [_AllowedPrincipal["default"]]);
        }

        if (data.hasOwnProperty('NextToken')) {
          obj['NextToken'] = _ApiClient["default"].convertToType(data['NextToken'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DescribeVpcEndpointServicePermissionsResult;
}();
/**
 * @member {Array.<module:model/AllowedPrincipal>} AllowedPrincipals
 */


DescribeVpcEndpointServicePermissionsResult.prototype['AllowedPrincipals'] = undefined;
/**
 * @member {String} NextToken
 */

DescribeVpcEndpointServicePermissionsResult.prototype['NextToken'] = undefined;
var _default = DescribeVpcEndpointServicePermissionsResult;
exports["default"] = _default;