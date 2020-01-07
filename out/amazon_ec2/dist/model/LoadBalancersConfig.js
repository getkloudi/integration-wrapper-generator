"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ClassicLoadBalancersConfig = _interopRequireDefault(require("./ClassicLoadBalancersConfig"));

var _TargetGroupsConfig = _interopRequireDefault(require("./TargetGroupsConfig"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LoadBalancersConfig model module.
 * @module model/LoadBalancersConfig
 * @version 1.1.0
 */
var LoadBalancersConfig =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>LoadBalancersConfig</code>.
   * Describes the Classic Load Balancers and target groups to attach to a Spot Fleet request.
   * @alias module:model/LoadBalancersConfig
   */
  function LoadBalancersConfig() {
    _classCallCheck(this, LoadBalancersConfig);

    LoadBalancersConfig.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LoadBalancersConfig, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LoadBalancersConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoadBalancersConfig} obj Optional instance to populate.
     * @return {module:model/LoadBalancersConfig} The populated <code>LoadBalancersConfig</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LoadBalancersConfig();

        if (data.hasOwnProperty('ClassicLoadBalancersConfig')) {
          obj['ClassicLoadBalancersConfig'] = _ClassicLoadBalancersConfig["default"].constructFromObject(data['ClassicLoadBalancersConfig']);
        }

        if (data.hasOwnProperty('TargetGroupsConfig')) {
          obj['TargetGroupsConfig'] = _TargetGroupsConfig["default"].constructFromObject(data['TargetGroupsConfig']);
        }
      }

      return obj;
    }
  }]);

  return LoadBalancersConfig;
}();
/**
 * @member {module:model/ClassicLoadBalancersConfig} ClassicLoadBalancersConfig
 */


LoadBalancersConfig.prototype['ClassicLoadBalancersConfig'] = undefined;
/**
 * @member {module:model/TargetGroupsConfig} TargetGroupsConfig
 */

LoadBalancersConfig.prototype['TargetGroupsConfig'] = undefined;
var _default = LoadBalancersConfig;
exports["default"] = _default;