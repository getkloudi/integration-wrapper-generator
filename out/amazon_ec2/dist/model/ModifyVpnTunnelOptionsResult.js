"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _VpnConnection = _interopRequireDefault(require("./VpnConnection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ModifyVpnTunnelOptionsResult model module.
 * @module model/ModifyVpnTunnelOptionsResult
 * @version 1.1.0
 */
var ModifyVpnTunnelOptionsResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ModifyVpnTunnelOptionsResult</code>.
   * @alias module:model/ModifyVpnTunnelOptionsResult
   */
  function ModifyVpnTunnelOptionsResult() {
    _classCallCheck(this, ModifyVpnTunnelOptionsResult);

    ModifyVpnTunnelOptionsResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ModifyVpnTunnelOptionsResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ModifyVpnTunnelOptionsResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModifyVpnTunnelOptionsResult} obj Optional instance to populate.
     * @return {module:model/ModifyVpnTunnelOptionsResult} The populated <code>ModifyVpnTunnelOptionsResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ModifyVpnTunnelOptionsResult();

        if (data.hasOwnProperty('VpnConnection')) {
          obj['VpnConnection'] = _VpnConnection["default"].constructFromObject(data['VpnConnection']);
        }
      }

      return obj;
    }
  }]);

  return ModifyVpnTunnelOptionsResult;
}();
/**
 * @member {module:model/VpnConnection} VpnConnection
 */


ModifyVpnTunnelOptionsResult.prototype['VpnConnection'] = undefined;
var _default = ModifyVpnTunnelOptionsResult;
exports["default"] = _default;