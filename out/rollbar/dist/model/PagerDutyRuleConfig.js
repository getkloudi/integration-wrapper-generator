"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Config = _interopRequireDefault(require("./Config23"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PagerDutyRuleConfig model module.
 * @module model/PagerDutyRuleConfig
 * @version 1.1.0
 */
var PagerDutyRuleConfig = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PagerDutyRuleConfig</code>.
   * @alias module:model/PagerDutyRuleConfig
   */
  function PagerDutyRuleConfig() {
    _classCallCheck(this, PagerDutyRuleConfig);

    PagerDutyRuleConfig.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PagerDutyRuleConfig, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PagerDutyRuleConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PagerDutyRuleConfig} obj Optional instance to populate.
     * @return {module:model/PagerDutyRuleConfig} The populated <code>PagerDutyRuleConfig</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PagerDutyRuleConfig();

        if (data.hasOwnProperty('config')) {
          obj['config'] = _Config["default"].constructFromObject(data['config']);
        }
      }

      return obj;
    }
  }]);

  return PagerDutyRuleConfig;
}();
/**
 * @member {module:model/Config23} config
 */


PagerDutyRuleConfig.prototype['config'] = undefined;
var _default = PagerDutyRuleConfig;
exports["default"] = _default;