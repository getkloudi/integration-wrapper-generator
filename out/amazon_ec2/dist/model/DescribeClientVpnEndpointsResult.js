"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ClientVpnEndpoint = _interopRequireDefault(require("./ClientVpnEndpoint"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DescribeClientVpnEndpointsResult model module.
 * @module model/DescribeClientVpnEndpointsResult
 * @version 1.0.0
 */
var DescribeClientVpnEndpointsResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeClientVpnEndpointsResult</code>.
   * @alias module:model/DescribeClientVpnEndpointsResult
   */
  function DescribeClientVpnEndpointsResult() {
    _classCallCheck(this, DescribeClientVpnEndpointsResult);

    DescribeClientVpnEndpointsResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeClientVpnEndpointsResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeClientVpnEndpointsResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeClientVpnEndpointsResult} obj Optional instance to populate.
     * @return {module:model/DescribeClientVpnEndpointsResult} The populated <code>DescribeClientVpnEndpointsResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeClientVpnEndpointsResult();

        if (data.hasOwnProperty('ClientVpnEndpoints')) {
          obj['ClientVpnEndpoints'] = _ApiClient["default"].convertToType(data['ClientVpnEndpoints'], [_ClientVpnEndpoint["default"]]);
        }

        if (data.hasOwnProperty('NextToken')) {
          obj['NextToken'] = _ApiClient["default"].convertToType(data['NextToken'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DescribeClientVpnEndpointsResult;
}();
/**
 * @member {Array.<module:model/ClientVpnEndpoint>} ClientVpnEndpoints
 */


DescribeClientVpnEndpointsResult.prototype['ClientVpnEndpoints'] = undefined;
/**
 * @member {String} NextToken
 */

DescribeClientVpnEndpointsResult.prototype['NextToken'] = undefined;
var _default = DescribeClientVpnEndpointsResult;
exports["default"] = _default;