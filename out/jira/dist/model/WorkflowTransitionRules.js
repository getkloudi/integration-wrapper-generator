"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ConnectWorkflowTransitionRule = _interopRequireDefault(require("./ConnectWorkflowTransitionRule"));

var _WorkflowId = _interopRequireDefault(require("./WorkflowId"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The WorkflowTransitionRules model module.
 * @module model/WorkflowTransitionRules
 * @version 1.4.0
 */
var WorkflowTransitionRules = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WorkflowTransitionRules</code>.
   * A workflow with transition rules.
   * @alias module:model/WorkflowTransitionRules
   */
  function WorkflowTransitionRules() {
    _classCallCheck(this, WorkflowTransitionRules);

    WorkflowTransitionRules.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WorkflowTransitionRules, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>WorkflowTransitionRules</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkflowTransitionRules} obj Optional instance to populate.
     * @return {module:model/WorkflowTransitionRules} The populated <code>WorkflowTransitionRules</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WorkflowTransitionRules();

        if (data.hasOwnProperty('conditions')) {
          obj['conditions'] = _ApiClient["default"].convertToType(data['conditions'], [_ConnectWorkflowTransitionRule["default"]]);
        }

        if (data.hasOwnProperty('postFunctions')) {
          obj['postFunctions'] = _ApiClient["default"].convertToType(data['postFunctions'], [_ConnectWorkflowTransitionRule["default"]]);
        }

        if (data.hasOwnProperty('validators')) {
          obj['validators'] = _ApiClient["default"].convertToType(data['validators'], [_ConnectWorkflowTransitionRule["default"]]);
        }

        if (data.hasOwnProperty('workflowId')) {
          obj['workflowId'] = _WorkflowId["default"].constructFromObject(data['workflowId']);
        }
      }

      return obj;
    }
  }]);

  return WorkflowTransitionRules;
}();
/**
 * The list of conditions within the workflow.
 * @member {Array.<module:model/ConnectWorkflowTransitionRule>} conditions
 */


WorkflowTransitionRules.prototype['conditions'] = undefined;
/**
 * The list of post functions within the workflow.
 * @member {Array.<module:model/ConnectWorkflowTransitionRule>} postFunctions
 */

WorkflowTransitionRules.prototype['postFunctions'] = undefined;
/**
 * The list of validators within the workflow.
 * @member {Array.<module:model/ConnectWorkflowTransitionRule>} validators
 */

WorkflowTransitionRules.prototype['validators'] = undefined;
/**
 * @member {module:model/WorkflowId} workflowId
 */

WorkflowTransitionRules.prototype['workflowId'] = undefined;
var _default = WorkflowTransitionRules;
exports["default"] = _default;