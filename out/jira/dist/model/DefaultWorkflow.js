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
 * The DefaultWorkflow model module.
 * @module model/DefaultWorkflow
 * @version 1.4.0
 */
var DefaultWorkflow = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DefaultWorkflow</code>.
   * Details about the default workflow.
   * @alias module:model/DefaultWorkflow
   * @param workflow {String} The name of the workflow to set as the default workflow.
   */
  function DefaultWorkflow(workflow) {
    _classCallCheck(this, DefaultWorkflow);

    DefaultWorkflow.initialize(this, workflow);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DefaultWorkflow, null, [{
    key: "initialize",
    value: function initialize(obj, workflow) {
      obj['workflow'] = workflow;
    }
    /**
     * Constructs a <code>DefaultWorkflow</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DefaultWorkflow} obj Optional instance to populate.
     * @return {module:model/DefaultWorkflow} The populated <code>DefaultWorkflow</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DefaultWorkflow();

        if (data.hasOwnProperty('updateDraftIfNeeded')) {
          obj['updateDraftIfNeeded'] = _ApiClient["default"].convertToType(data['updateDraftIfNeeded'], 'Boolean');
        }

        if (data.hasOwnProperty('workflow')) {
          obj['workflow'] = _ApiClient["default"].convertToType(data['workflow'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DefaultWorkflow;
}();
/**
 * Whether a draft workflow scheme is created or updated when updating an active workflow scheme. The draft is updated with the new default workflow. Defaults to `false`.
 * @member {Boolean} updateDraftIfNeeded
 */


DefaultWorkflow.prototype['updateDraftIfNeeded'] = undefined;
/**
 * The name of the workflow to set as the default workflow.
 * @member {String} workflow
 */

DefaultWorkflow.prototype['workflow'] = undefined;
var _default = DefaultWorkflow;
exports["default"] = _default;