"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Config = _interopRequireDefault(require("./Config"));

var _Filter = _interopRequireDefault(require("./Filter3"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DeployEmailRule model module.
 * @module model/DeployEmailRule
 * @version 1.1.0
 */
var DeployEmailRule = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DeployEmailRule</code>.
   * @alias module:model/DeployEmailRule
   * @param trigger {String} A new deploy is reported.
   */
  function DeployEmailRule(trigger) {
    _classCallCheck(this, DeployEmailRule);

    DeployEmailRule.initialize(this, trigger);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeployEmailRule, null, [{
    key: "initialize",
    value: function initialize(obj, trigger) {
      obj['trigger'] = trigger;
    }
    /**
     * Constructs a <code>DeployEmailRule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeployEmailRule} obj Optional instance to populate.
     * @return {module:model/DeployEmailRule} The populated <code>DeployEmailRule</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeployEmailRule();

        if (data.hasOwnProperty('trigger')) {
          obj['trigger'] = _ApiClient["default"].convertToType(data['trigger'], 'String');
        }

        if (data.hasOwnProperty('filters')) {
          obj['filters'] = _ApiClient["default"].convertToType(data['filters'], [_Filter["default"]]);
        }

        if (data.hasOwnProperty('config')) {
          obj['config'] = _Config["default"].constructFromObject(data['config']);
        }
      }

      return obj;
    }
  }]);

  return DeployEmailRule;
}();
/**
 * A new deploy is reported.
 * @member {String} trigger
 * @default 'deploy'
 */


DeployEmailRule.prototype['trigger'] = 'deploy';
/**
 * To keep your notifications relevant, you'll want to apply filters to limit when they send messages or create incidents.
 * @member {Array.<module:model/Filter3>} filters
 */

DeployEmailRule.prototype['filters'] = undefined;
/**
 * @member {module:model/Config} config
 */

DeployEmailRule.prototype['config'] = undefined;
var _default = DeployEmailRule;
exports["default"] = _default;