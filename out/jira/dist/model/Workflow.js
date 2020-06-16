"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PublishedWorkflowId = _interopRequireDefault(require("./PublishedWorkflowId"));

var _Transition = _interopRequireDefault(require("./Transition"));

var _WorkflowStatus = _interopRequireDefault(require("./WorkflowStatus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Workflow model module.
 * @module model/Workflow
 * @version 1.4.0
 */
var Workflow = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Workflow</code>.
   * Details about a workflow.
   * @alias module:model/Workflow
   * @param description {String} The description of the workflow.
   */
  function Workflow(description) {
    _classCallCheck(this, Workflow);

    Workflow.initialize(this, description);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Workflow, null, [{
    key: "initialize",
    value: function initialize(obj, description) {
      obj['description'] = description;
    }
    /**
     * Constructs a <code>Workflow</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Workflow} obj Optional instance to populate.
     * @return {module:model/Workflow} The populated <code>Workflow</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Workflow();

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _PublishedWorkflowId["default"].constructFromObject(data['id']);
        }

        if (data.hasOwnProperty('statuses')) {
          obj['statuses'] = _ApiClient["default"].convertToType(data['statuses'], [_WorkflowStatus["default"]]);
        }

        if (data.hasOwnProperty('transitions')) {
          obj['transitions'] = _ApiClient["default"].convertToType(data['transitions'], [_Transition["default"]]);
        }
      }

      return obj;
    }
  }]);

  return Workflow;
}();
/**
 * The description of the workflow.
 * @member {String} description
 */


Workflow.prototype['description'] = undefined;
/**
 * @member {module:model/PublishedWorkflowId} id
 */

Workflow.prototype['id'] = undefined;
/**
 * The statuses of the workflow.
 * @member {Array.<module:model/WorkflowStatus>} statuses
 */

Workflow.prototype['statuses'] = undefined;
/**
 * The transitions of the workflow.
 * @member {Array.<module:model/Transition>} transitions
 */

Workflow.prototype['transitions'] = undefined;
var _default = Workflow;
exports["default"] = _default;