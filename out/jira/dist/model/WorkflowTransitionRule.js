"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The WorkflowTransitionRule model module.
 * @module model/WorkflowTransitionRule
 * @version 1.4.0
 */
var WorkflowTransitionRule = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WorkflowTransitionRule</code>.
   * A workflow transition rule.
   * @alias module:model/WorkflowTransitionRule
   * @param type {String} The type of the transition rule.
   */
  function WorkflowTransitionRule(type) {
    _classCallCheck(this, WorkflowTransitionRule);

    WorkflowTransitionRule.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WorkflowTransitionRule, null, [{
    key: "initialize",
    value: function initialize(obj, type) {
      obj['type'] = type;
    }
    /**
     * Constructs a <code>WorkflowTransitionRule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkflowTransitionRule} obj Optional instance to populate.
     * @return {module:model/WorkflowTransitionRule} The populated <code>WorkflowTransitionRule</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WorkflowTransitionRule();

        if (data.hasOwnProperty('configuration')) {
          obj['configuration'] = _ApiClient["default"].convertToType(data['configuration'], Object);
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return WorkflowTransitionRule;
}();
/**
 * The configuration of the transition rule. This is currently returned only for some of the rule types. Availability of this property is subject to change.
 * @member {Object} configuration
 */


WorkflowTransitionRule.prototype['configuration'] = undefined;
/**
 * The type of the transition rule.
 * @member {String} type
 */

WorkflowTransitionRule.prototype['type'] = undefined;
var _default = WorkflowTransitionRule;
exports["default"] = _default;