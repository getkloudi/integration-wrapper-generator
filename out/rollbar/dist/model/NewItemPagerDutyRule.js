"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Config = _interopRequireDefault(require("./Config23"));

var _Filter = _interopRequireDefault(require("./Filter1"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The NewItemPagerDutyRule model module.
 * @module model/NewItemPagerDutyRule
 * @version 1.1.0
 */
var NewItemPagerDutyRule = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NewItemPagerDutyRule</code>.
   * @alias module:model/NewItemPagerDutyRule
   * @param trigger {String} An error/ message is seen for the first time
   */
  function NewItemPagerDutyRule(trigger) {
    _classCallCheck(this, NewItemPagerDutyRule);

    NewItemPagerDutyRule.initialize(this, trigger);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NewItemPagerDutyRule, null, [{
    key: "initialize",
    value: function initialize(obj, trigger) {
      obj['trigger'] = trigger;
    }
    /**
     * Constructs a <code>NewItemPagerDutyRule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewItemPagerDutyRule} obj Optional instance to populate.
     * @return {module:model/NewItemPagerDutyRule} The populated <code>NewItemPagerDutyRule</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NewItemPagerDutyRule();

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

  return NewItemPagerDutyRule;
}();
/**
 * An error/ message is seen for the first time
 * @member {String} trigger
 * @default 'new_item'
 */


NewItemPagerDutyRule.prototype['trigger'] = 'new_item';
/**
 * To keep your notifications relevant, you'll want to apply filters to limit when they send messages or create incidents.
 * @member {Array.<module:model/Filter1>} filters
 */

NewItemPagerDutyRule.prototype['filters'] = undefined;
/**
 * @member {module:model/Config23} config
 */

NewItemPagerDutyRule.prototype['config'] = undefined;
var _default = NewItemPagerDutyRule;
exports["default"] = _default;