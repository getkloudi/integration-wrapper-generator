"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Config = _interopRequireDefault(require("./Config13"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SlackRuleConfigNoButtons model module.
 * @module model/SlackRuleConfigNoButtons
 * @version 1.1.0
 */
var SlackRuleConfigNoButtons = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SlackRuleConfigNoButtons</code>.
   * @alias module:model/SlackRuleConfigNoButtons
   */
  function SlackRuleConfigNoButtons() {
    _classCallCheck(this, SlackRuleConfigNoButtons);

    SlackRuleConfigNoButtons.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SlackRuleConfigNoButtons, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SlackRuleConfigNoButtons</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SlackRuleConfigNoButtons} obj Optional instance to populate.
     * @return {module:model/SlackRuleConfigNoButtons} The populated <code>SlackRuleConfigNoButtons</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SlackRuleConfigNoButtons();

        if (data.hasOwnProperty('config')) {
          obj['config'] = _Config["default"].constructFromObject(data['config']);
        }
      }

      return obj;
    }
  }]);

  return SlackRuleConfigNoButtons;
}();
/**
 * @member {module:model/Config13} config
 */


SlackRuleConfigNoButtons.prototype['config'] = undefined;
var _default = SlackRuleConfigNoButtons;
exports["default"] = _default;