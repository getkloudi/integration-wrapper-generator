"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _WorkflowTransitionRules = _interopRequireDefault(require("./WorkflowTransitionRules"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The WorkflowTransitionRulesUpdate model module.
 * @module model/WorkflowTransitionRulesUpdate
 * @version 1.4.0
 */
var WorkflowTransitionRulesUpdate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WorkflowTransitionRulesUpdate</code>.
   * Details about a workflow configuration update request.
   * @alias module:model/WorkflowTransitionRulesUpdate
   */
  function WorkflowTransitionRulesUpdate() {
    _classCallCheck(this, WorkflowTransitionRulesUpdate);

    WorkflowTransitionRulesUpdate.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WorkflowTransitionRulesUpdate, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>WorkflowTransitionRulesUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkflowTransitionRulesUpdate} obj Optional instance to populate.
     * @return {module:model/WorkflowTransitionRulesUpdate} The populated <code>WorkflowTransitionRulesUpdate</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WorkflowTransitionRulesUpdate();

        if (data.hasOwnProperty('workflows')) {
          obj['workflows'] = _ApiClient["default"].convertToType(data['workflows'], [_WorkflowTransitionRules["default"]]);
        }
      }

      return obj;
    }
  }]);

  return WorkflowTransitionRulesUpdate;
}();
/**
 * The list of workflows with transition rules to update.
 * @member {Array.<module:model/WorkflowTransitionRules>} workflows
 */


WorkflowTransitionRulesUpdate.prototype['workflows'] = undefined;
var _default = WorkflowTransitionRulesUpdate;
exports["default"] = _default;