"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _WorkflowTransitionRulesUpdateErrorDetails = _interopRequireDefault(require("./WorkflowTransitionRulesUpdateErrorDetails"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The WorkflowTransitionRulesUpdateErrors model module.
 * @module model/WorkflowTransitionRulesUpdateErrors
 * @version 1.4.0
 */
var WorkflowTransitionRulesUpdateErrors = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WorkflowTransitionRulesUpdateErrors</code>.
   * Details of any errors encountered while updating workflow transition rules.
   * @alias module:model/WorkflowTransitionRulesUpdateErrors
   * @param updateResults {Array.<module:model/WorkflowTransitionRulesUpdateErrorDetails>} A list of workflows.
   */
  function WorkflowTransitionRulesUpdateErrors(updateResults) {
    _classCallCheck(this, WorkflowTransitionRulesUpdateErrors);

    WorkflowTransitionRulesUpdateErrors.initialize(this, updateResults);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WorkflowTransitionRulesUpdateErrors, null, [{
    key: "initialize",
    value: function initialize(obj, updateResults) {
      obj['updateResults'] = updateResults;
    }
    /**
     * Constructs a <code>WorkflowTransitionRulesUpdateErrors</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkflowTransitionRulesUpdateErrors} obj Optional instance to populate.
     * @return {module:model/WorkflowTransitionRulesUpdateErrors} The populated <code>WorkflowTransitionRulesUpdateErrors</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WorkflowTransitionRulesUpdateErrors();

        if (data.hasOwnProperty('updateResults')) {
          obj['updateResults'] = _ApiClient["default"].convertToType(data['updateResults'], [_WorkflowTransitionRulesUpdateErrorDetails["default"]]);
        }
      }

      return obj;
    }
  }]);

  return WorkflowTransitionRulesUpdateErrors;
}();
/**
 * A list of workflows.
 * @member {Array.<module:model/WorkflowTransitionRulesUpdateErrorDetails>} updateResults
 */


WorkflowTransitionRulesUpdateErrors.prototype['updateResults'] = undefined;
var _default = WorkflowTransitionRulesUpdateErrors;
exports["default"] = _default;