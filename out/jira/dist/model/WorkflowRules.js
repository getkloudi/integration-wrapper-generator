"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _WorkflowTransitionRule = _interopRequireDefault(require("./WorkflowTransitionRule"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The WorkflowRules model module.
 * @module model/WorkflowRules
 * @version 1.4.0
 */
var WorkflowRules = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WorkflowRules</code>.
   * A collection of transition rules.
   * @alias module:model/WorkflowRules
   * @param conditions {Array.<module:model/WorkflowTransitionRule>} The workflow conditions.
   * @param postFunctions {Array.<module:model/WorkflowTransitionRule>} The workflow post functions.
   * @param validators {Array.<module:model/WorkflowTransitionRule>} The workflow validators.
   */
  function WorkflowRules(conditions, postFunctions, validators) {
    _classCallCheck(this, WorkflowRules);

    WorkflowRules.initialize(this, conditions, postFunctions, validators);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WorkflowRules, null, [{
    key: "initialize",
    value: function initialize(obj, conditions, postFunctions, validators) {
      obj['conditions'] = conditions;
      obj['postFunctions'] = postFunctions;
      obj['validators'] = validators;
    }
    /**
     * Constructs a <code>WorkflowRules</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkflowRules} obj Optional instance to populate.
     * @return {module:model/WorkflowRules} The populated <code>WorkflowRules</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WorkflowRules();

        if (data.hasOwnProperty('conditions')) {
          obj['conditions'] = _ApiClient["default"].convertToType(data['conditions'], [_WorkflowTransitionRule["default"]]);
        }

        if (data.hasOwnProperty('postFunctions')) {
          obj['postFunctions'] = _ApiClient["default"].convertToType(data['postFunctions'], [_WorkflowTransitionRule["default"]]);
        }

        if (data.hasOwnProperty('validators')) {
          obj['validators'] = _ApiClient["default"].convertToType(data['validators'], [_WorkflowTransitionRule["default"]]);
        }
      }

      return obj;
    }
  }]);

  return WorkflowRules;
}();
/**
 * The workflow conditions.
 * @member {Array.<module:model/WorkflowTransitionRule>} conditions
 */


WorkflowRules.prototype['conditions'] = undefined;
/**
 * The workflow post functions.
 * @member {Array.<module:model/WorkflowTransitionRule>} postFunctions
 */

WorkflowRules.prototype['postFunctions'] = undefined;
/**
 * The workflow validators.
 * @member {Array.<module:model/WorkflowTransitionRule>} validators
 */

WorkflowRules.prototype['validators'] = undefined;
var _default = WorkflowRules;
exports["default"] = _default;