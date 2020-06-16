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
 * The IssueTypeWorkflowMapping model module.
 * @module model/IssueTypeWorkflowMapping
 * @version 1.4.0
 */
var IssueTypeWorkflowMapping = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IssueTypeWorkflowMapping</code>.
   * Details about the mapping between an issue type and a workflow.
   * @alias module:model/IssueTypeWorkflowMapping
   */
  function IssueTypeWorkflowMapping() {
    _classCallCheck(this, IssueTypeWorkflowMapping);

    IssueTypeWorkflowMapping.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IssueTypeWorkflowMapping, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>IssueTypeWorkflowMapping</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueTypeWorkflowMapping} obj Optional instance to populate.
     * @return {module:model/IssueTypeWorkflowMapping} The populated <code>IssueTypeWorkflowMapping</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IssueTypeWorkflowMapping();

        if (data.hasOwnProperty('issueType')) {
          obj['issueType'] = _ApiClient["default"].convertToType(data['issueType'], 'String');
        }

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

  return IssueTypeWorkflowMapping;
}();
/**
 * The ID of the issue type. Not required if updating the issue type-workflow mapping.
 * @member {String} issueType
 */


IssueTypeWorkflowMapping.prototype['issueType'] = undefined;
/**
 * Set to true to create or update the draft of a workflow scheme and update the mapping in the draft, when the workflow scheme cannot be edited. Defaults to `false`. Only applicable when updating the workflow-issue types mapping.
 * @member {Boolean} updateDraftIfNeeded
 */

IssueTypeWorkflowMapping.prototype['updateDraftIfNeeded'] = undefined;
/**
 * The name of the workflow.
 * @member {String} workflow
 */

IssueTypeWorkflowMapping.prototype['workflow'] = undefined;
var _default = IssueTypeWorkflowMapping;
exports["default"] = _default;