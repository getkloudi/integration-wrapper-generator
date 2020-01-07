"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ClassicLoadBalancer = _interopRequireDefault(require("./ClassicLoadBalancer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ClassicLoadBalancersConfig model module.
 * @module model/ClassicLoadBalancersConfig
 * @version 1.1.0
 */
var ClassicLoadBalancersConfig =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ClassicLoadBalancersConfig</code>.
   * Describes the Classic Load Balancers to attach to a Spot Fleet. Spot Fleet registers the running Spot Instances with these Classic Load Balancers.
   * @alias module:model/ClassicLoadBalancersConfig
   */
  function ClassicLoadBalancersConfig() {
    _classCallCheck(this, ClassicLoadBalancersConfig);

    ClassicLoadBalancersConfig.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ClassicLoadBalancersConfig, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ClassicLoadBalancersConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ClassicLoadBalancersConfig} obj Optional instance to populate.
     * @return {module:model/ClassicLoadBalancersConfig} The populated <code>ClassicLoadBalancersConfig</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ClassicLoadBalancersConfig();

        if (data.hasOwnProperty('ClassicLoadBalancers')) {
          obj['ClassicLoadBalancers'] = _ApiClient["default"].convertToType(data['ClassicLoadBalancers'], [_ClassicLoadBalancer["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ClassicLoadBalancersConfig;
}();
/**
 * @member {Array.<module:model/ClassicLoadBalancer>} ClassicLoadBalancers
 */


ClassicLoadBalancersConfig.prototype['ClassicLoadBalancers'] = undefined;
var _default = ClassicLoadBalancersConfig;
exports["default"] = _default;