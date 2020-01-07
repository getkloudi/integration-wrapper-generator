"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ApplySecurityGroupsToClientVpnTargetNetworkResult model module.
 * @module model/ApplySecurityGroupsToClientVpnTargetNetworkResult
 * @version 1.1.0
 */
var ApplySecurityGroupsToClientVpnTargetNetworkResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ApplySecurityGroupsToClientVpnTargetNetworkResult</code>.
   * @alias module:model/ApplySecurityGroupsToClientVpnTargetNetworkResult
   */
  function ApplySecurityGroupsToClientVpnTargetNetworkResult() {
    _classCallCheck(this, ApplySecurityGroupsToClientVpnTargetNetworkResult);

    ApplySecurityGroupsToClientVpnTargetNetworkResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ApplySecurityGroupsToClientVpnTargetNetworkResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ApplySecurityGroupsToClientVpnTargetNetworkResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApplySecurityGroupsToClientVpnTargetNetworkResult} obj Optional instance to populate.
     * @return {module:model/ApplySecurityGroupsToClientVpnTargetNetworkResult} The populated <code>ApplySecurityGroupsToClientVpnTargetNetworkResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ApplySecurityGroupsToClientVpnTargetNetworkResult();

        if (data.hasOwnProperty('SecurityGroupIds')) {
          obj['SecurityGroupIds'] = _ApiClient["default"].convertToType(data['SecurityGroupIds'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return ApplySecurityGroupsToClientVpnTargetNetworkResult;
}();
/**
 * @member {Array.<String>} SecurityGroupIds
 */


ApplySecurityGroupsToClientVpnTargetNetworkResult.prototype['SecurityGroupIds'] = undefined;
var _default = ApplySecurityGroupsToClientVpnTargetNetworkResult;
exports["default"] = _default;