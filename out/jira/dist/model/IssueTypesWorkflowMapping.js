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
 * The IssueTypesWorkflowMapping model module.
 * @module model/IssueTypesWorkflowMapping
 * @version 1.4.0
 */
var IssueTypesWorkflowMapping = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IssueTypesWorkflowMapping</code>.
   * Details about the mapping between issue types and a workflow.
   * @alias module:model/IssueTypesWorkflowMapping
   */
  function IssueTypesWorkflowMapping() {
    _classCallCheck(this, IssueTypesWorkflowMapping);

    IssueTypesWorkflowMapping.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IssueTypesWorkflowMapping, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>IssueTypesWorkflowMapping</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueTypesWorkflowMapping} obj Optional instance to populate.
     * @return {module:model/IssueTypesWorkflowMapping} The populated <code>IssueTypesWorkflowMapping</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IssueTypesWorkflowMapping();

        if (data.hasOwnProperty('defaultMapping')) {
          obj['defaultMapping'] = _ApiClient["default"].convertToType(data['defaultMapping'], 'Boolean');
        }

        if (data.hasOwnProperty('issueTypes')) {
          obj['issueTypes'] = _ApiClient["default"].convertToType(data['issueTypes'], ['String']);
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

  return IssueTypesWorkflowMapping;
}();
/**
 * Whether the workflow is the default workflow for the workflow scheme.
 * @member {Boolean} defaultMapping
 */


IssueTypesWorkflowMapping.prototype['defaultMapping'] = undefined;
/**
 * The list of issue type IDs.
 * @member {Array.<String>} issueTypes
 */

IssueTypesWorkflowMapping.prototype['issueTypes'] = undefined;
/**
 * Whether a draft workflow scheme is created or updated when updating an active workflow scheme. The draft is updated with the new workflow-issue types mapping. Defaults to `false`.
 * @member {Boolean} updateDraftIfNeeded
 */

IssueTypesWorkflowMapping.prototype['updateDraftIfNeeded'] = undefined;
/**
 * The name of the workflow. Optional if updating the workflow-issue types mapping.
 * @member {String} workflow
 */

IssueTypesWorkflowMapping.prototype['workflow'] = undefined;
var _default = IssueTypesWorkflowMapping;
exports["default"] = _default;