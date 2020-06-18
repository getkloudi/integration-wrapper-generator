"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _WorkflowId = _interopRequireDefault(require("./WorkflowId"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The WorkflowTransitionRulesUpdateErrorDetails model module.
 * @module model/WorkflowTransitionRulesUpdateErrorDetails
 * @version 1.4.0
 */
var WorkflowTransitionRulesUpdateErrorDetails = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WorkflowTransitionRulesUpdateErrorDetails</code>.
   * Details of any errors encountered while updating workflow transition rules for a workflow.
   * @alias module:model/WorkflowTransitionRulesUpdateErrorDetails
   * @param ruleUpdateErrors {Object.<String, Array.<String>>} A list of transition rule update errors, indexed by the transition rule ID. Any transition rule that appears here wasn't updated.
   */
  function WorkflowTransitionRulesUpdateErrorDetails(ruleUpdateErrors) {
    _classCallCheck(this, WorkflowTransitionRulesUpdateErrorDetails);

    WorkflowTransitionRulesUpdateErrorDetails.initialize(this, ruleUpdateErrors);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WorkflowTransitionRulesUpdateErrorDetails, null, [{
    key: "initialize",
    value: function initialize(obj, ruleUpdateErrors) {
      obj['ruleUpdateErrors'] = ruleUpdateErrors;
    }
    /**
     * Constructs a <code>WorkflowTransitionRulesUpdateErrorDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkflowTransitionRulesUpdateErrorDetails} obj Optional instance to populate.
     * @return {module:model/WorkflowTransitionRulesUpdateErrorDetails} The populated <code>WorkflowTransitionRulesUpdateErrorDetails</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WorkflowTransitionRulesUpdateErrorDetails();

        if (data.hasOwnProperty('ruleUpdateErrors')) {
          obj['ruleUpdateErrors'] = _ApiClient["default"].convertToType(data['ruleUpdateErrors'], {
            'String': ['String']
          });
        }

        if (data.hasOwnProperty('updateErrors')) {
          obj['updateErrors'] = _ApiClient["default"].convertToType(data['updateErrors'], ['String']);
        }

        if (data.hasOwnProperty('workflowId')) {
          obj['workflowId'] = _WorkflowId["default"].constructFromObject(data['workflowId']);
        }
      }

      return obj;
    }
  }]);

  return WorkflowTransitionRulesUpdateErrorDetails;
}();
/**
 * A list of transition rule update errors, indexed by the transition rule ID. Any transition rule that appears here wasn't updated.
 * @member {Object.<String, Array.<String>>} ruleUpdateErrors
 */


WorkflowTransitionRulesUpdateErrorDetails.prototype['ruleUpdateErrors'] = undefined;
/**
 * The list of errors that specify why the workflow update failed. The workflow was not updated if the list contains any entries.
 * @member {Array.<String>} updateErrors
 */

WorkflowTransitionRulesUpdateErrorDetails.prototype['updateErrors'] = undefined;
/**
 * @member {module:model/WorkflowId} workflowId
 */

WorkflowTransitionRulesUpdateErrorDetails.prototype['workflowId'] = undefined;
var _default = WorkflowTransitionRulesUpdateErrorDetails;
exports["default"] = _default;