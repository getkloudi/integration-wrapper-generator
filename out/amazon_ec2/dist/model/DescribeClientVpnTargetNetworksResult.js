"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TargetNetwork = _interopRequireDefault(require("./TargetNetwork"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DescribeClientVpnTargetNetworksResult model module.
 * @module model/DescribeClientVpnTargetNetworksResult
 * @version 1.1.0
 */
var DescribeClientVpnTargetNetworksResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeClientVpnTargetNetworksResult</code>.
   * @alias module:model/DescribeClientVpnTargetNetworksResult
   */
  function DescribeClientVpnTargetNetworksResult() {
    _classCallCheck(this, DescribeClientVpnTargetNetworksResult);

    DescribeClientVpnTargetNetworksResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeClientVpnTargetNetworksResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeClientVpnTargetNetworksResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeClientVpnTargetNetworksResult} obj Optional instance to populate.
     * @return {module:model/DescribeClientVpnTargetNetworksResult} The populated <code>DescribeClientVpnTargetNetworksResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeClientVpnTargetNetworksResult();

        if (data.hasOwnProperty('ClientVpnTargetNetworks')) {
          obj['ClientVpnTargetNetworks'] = _ApiClient["default"].convertToType(data['ClientVpnTargetNetworks'], [_TargetNetwork["default"]]);
        }

        if (data.hasOwnProperty('NextToken')) {
          obj['NextToken'] = _ApiClient["default"].convertToType(data['NextToken'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DescribeClientVpnTargetNetworksResult;
}();
/**
 * @member {Array.<module:model/TargetNetwork>} ClientVpnTargetNetworks
 */


DescribeClientVpnTargetNetworksResult.prototype['ClientVpnTargetNetworks'] = undefined;
/**
 * @member {String} NextToken
 */

DescribeClientVpnTargetNetworksResult.prototype['NextToken'] = undefined;
var _default = DescribeClientVpnTargetNetworksResult;
exports["default"] = _default;