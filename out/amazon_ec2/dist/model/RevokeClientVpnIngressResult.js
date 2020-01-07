"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ClientVpnAuthorizationRuleStatus = _interopRequireDefault(require("./ClientVpnAuthorizationRuleStatus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RevokeClientVpnIngressResult model module.
 * @module model/RevokeClientVpnIngressResult
 * @version 1.1.0
 */
var RevokeClientVpnIngressResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>RevokeClientVpnIngressResult</code>.
   * @alias module:model/RevokeClientVpnIngressResult
   */
  function RevokeClientVpnIngressResult() {
    _classCallCheck(this, RevokeClientVpnIngressResult);

    RevokeClientVpnIngressResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RevokeClientVpnIngressResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RevokeClientVpnIngressResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RevokeClientVpnIngressResult} obj Optional instance to populate.
     * @return {module:model/RevokeClientVpnIngressResult} The populated <code>RevokeClientVpnIngressResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RevokeClientVpnIngressResult();

        if (data.hasOwnProperty('Status')) {
          obj['Status'] = _ClientVpnAuthorizationRuleStatus["default"].constructFromObject(data['Status']);
        }
      }

      return obj;
    }
  }]);

  return RevokeClientVpnIngressResult;
}();
/**
 * @member {module:model/ClientVpnAuthorizationRuleStatus} Status
 */


RevokeClientVpnIngressResult.prototype['Status'] = undefined;
var _default = RevokeClientVpnIngressResult;
exports["default"] = _default;