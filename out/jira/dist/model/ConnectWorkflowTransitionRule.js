"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RuleConfiguration = _interopRequireDefault(require("./RuleConfiguration"));

var _WorkflowTransition = _interopRequireDefault(require("./WorkflowTransition"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ConnectWorkflowTransitionRule model module.
 * @module model/ConnectWorkflowTransitionRule
 * @version 1.4.0
 */
var ConnectWorkflowTransitionRule = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ConnectWorkflowTransitionRule</code>.
   * A workflow transition rule.
   * @alias module:model/ConnectWorkflowTransitionRule
   * @param id {String} The ID of the transition rule.
   * @param key {String} The key of the rule, as defined in the Connect app descriptor.
   */
  function ConnectWorkflowTransitionRule(id, key) {
    _classCallCheck(this, ConnectWorkflowTransitionRule);

    ConnectWorkflowTransitionRule.initialize(this, id, key);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ConnectWorkflowTransitionRule, null, [{
    key: "initialize",
    value: function initialize(obj, id, key) {
      obj['id'] = id;
      obj['key'] = key;
    }
    /**
     * Constructs a <code>ConnectWorkflowTransitionRule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConnectWorkflowTransitionRule} obj Optional instance to populate.
     * @return {module:model/ConnectWorkflowTransitionRule} The populated <code>ConnectWorkflowTransitionRule</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ConnectWorkflowTransitionRule();

        if (data.hasOwnProperty('configuration')) {
          obj['configuration'] = _RuleConfiguration["default"].constructFromObject(data['configuration']);
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('key')) {
          obj['key'] = _ApiClient["default"].convertToType(data['key'], 'String');
        }

        if (data.hasOwnProperty('transition')) {
          obj['transition'] = _ApiClient["default"].convertToType(data['transition'], _WorkflowTransition["default"]);
        }
      }

      return obj;
    }
  }]);

  return ConnectWorkflowTransitionRule;
}();
/**
 * @member {module:model/RuleConfiguration} configuration
 */


ConnectWorkflowTransitionRule.prototype['configuration'] = undefined;
/**
 * The ID of the transition rule.
 * @member {String} id
 */

ConnectWorkflowTransitionRule.prototype['id'] = undefined;
/**
 * The key of the rule, as defined in the Connect app descriptor.
 * @member {String} key
 */

ConnectWorkflowTransitionRule.prototype['key'] = undefined;
/**
 * @member {module:model/WorkflowTransition} transition
 */

ConnectWorkflowTransitionRule.prototype['transition'] = undefined;
var _default = ConnectWorkflowTransitionRule;
exports["default"] = _default;