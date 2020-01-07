"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TrafficMirrorFilterRule = _interopRequireDefault(require("./TrafficMirrorFilterRule"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ModifyTrafficMirrorFilterRuleResult model module.
 * @module model/ModifyTrafficMirrorFilterRuleResult
 * @version 1.1.0
 */
var ModifyTrafficMirrorFilterRuleResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ModifyTrafficMirrorFilterRuleResult</code>.
   * @alias module:model/ModifyTrafficMirrorFilterRuleResult
   */
  function ModifyTrafficMirrorFilterRuleResult() {
    _classCallCheck(this, ModifyTrafficMirrorFilterRuleResult);

    ModifyTrafficMirrorFilterRuleResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ModifyTrafficMirrorFilterRuleResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ModifyTrafficMirrorFilterRuleResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModifyTrafficMirrorFilterRuleResult} obj Optional instance to populate.
     * @return {module:model/ModifyTrafficMirrorFilterRuleResult} The populated <code>ModifyTrafficMirrorFilterRuleResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ModifyTrafficMirrorFilterRuleResult();

        if (data.hasOwnProperty('TrafficMirrorFilterRule')) {
          obj['TrafficMirrorFilterRule'] = _TrafficMirrorFilterRule["default"].constructFromObject(data['TrafficMirrorFilterRule']);
        }
      }

      return obj;
    }
  }]);

  return ModifyTrafficMirrorFilterRuleResult;
}();
/**
 * @member {module:model/TrafficMirrorFilterRule} TrafficMirrorFilterRule
 */


ModifyTrafficMirrorFilterRuleResult.prototype['TrafficMirrorFilterRule'] = undefined;
var _default = ModifyTrafficMirrorFilterRuleResult;
exports["default"] = _default;