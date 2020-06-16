"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IssueTypeDetails = _interopRequireDefault(require("./IssueTypeDetails"));

var _User = _interopRequireDefault(require("./User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The WorkflowScheme model module.
 * @module model/WorkflowScheme
 * @version 1.4.0
 */
var WorkflowScheme = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WorkflowScheme</code>.
   * Details about a workflow scheme.
   * @alias module:model/WorkflowScheme
   */
  function WorkflowScheme() {
    _classCallCheck(this, WorkflowScheme);

    WorkflowScheme.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WorkflowScheme, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>WorkflowScheme</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkflowScheme} obj Optional instance to populate.
     * @return {module:model/WorkflowScheme} The populated <code>WorkflowScheme</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WorkflowScheme();

        if (data.hasOwnProperty('defaultWorkflow')) {
          obj['defaultWorkflow'] = _ApiClient["default"].convertToType(data['defaultWorkflow'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('draft')) {
          obj['draft'] = _ApiClient["default"].convertToType(data['draft'], 'Boolean');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('issueTypeMappings')) {
          obj['issueTypeMappings'] = _ApiClient["default"].convertToType(data['issueTypeMappings'], {
            'String': 'String'
          });
        }

        if (data.hasOwnProperty('issueTypes')) {
          obj['issueTypes'] = _ApiClient["default"].convertToType(data['issueTypes'], {
            'String': _IssueTypeDetails["default"]
          });
        }

        if (data.hasOwnProperty('lastModified')) {
          obj['lastModified'] = _ApiClient["default"].convertToType(data['lastModified'], 'String');
        }

        if (data.hasOwnProperty('lastModifiedUser')) {
          obj['lastModifiedUser'] = _ApiClient["default"].convertToType(data['lastModifiedUser'], _User["default"]);
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('originalDefaultWorkflow')) {
          obj['originalDefaultWorkflow'] = _ApiClient["default"].convertToType(data['originalDefaultWorkflow'], 'String');
        }

        if (data.hasOwnProperty('originalIssueTypeMappings')) {
          obj['originalIssueTypeMappings'] = _ApiClient["default"].convertToType(data['originalIssueTypeMappings'], {
            'String': 'String'
          });
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _ApiClient["default"].convertToType(data['self'], 'String');
        }

        if (data.hasOwnProperty('updateDraftIfNeeded')) {
          obj['updateDraftIfNeeded'] = _ApiClient["default"].convertToType(data['updateDraftIfNeeded'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return WorkflowScheme;
}();
/**
 * The name of the default workflow for the workflow scheme. The default workflow has *All Unassigned Issue Types* assigned to it in Jira. If `defaultWorkflow` is not specified when creating a workflow scheme, it is set to *Jira Workflow (jira)*.
 * @member {String} defaultWorkflow
 */


WorkflowScheme.prototype['defaultWorkflow'] = undefined;
/**
 * The description of the workflow scheme.
 * @member {String} description
 */

WorkflowScheme.prototype['description'] = undefined;
/**
 * Whether the workflow scheme is a draft or not.
 * @member {Boolean} draft
 */

WorkflowScheme.prototype['draft'] = undefined;
/**
 * The ID of the workflow scheme.
 * @member {Number} id
 */

WorkflowScheme.prototype['id'] = undefined;
/**
 * The issue type to workflow mappings, where each mapping is an issue type ID and workflow name pair. Note that an issue type can only be mapped to one workflow in a workflow scheme.
 * @member {Object.<String, String>} issueTypeMappings
 */

WorkflowScheme.prototype['issueTypeMappings'] = undefined;
/**
 * The issue types available in Jira.
 * @member {Object.<String, module:model/IssueTypeDetails>} issueTypes
 */

WorkflowScheme.prototype['issueTypes'] = undefined;
/**
 * The date-time that the draft workflow scheme was last modified. A modification is a change to the issue type-project mappings only. This property does not apply to non-draft workflows.
 * @member {String} lastModified
 */

WorkflowScheme.prototype['lastModified'] = undefined;
/**
 * The user that last modified the draft workflow scheme. A modification is a change to the issue type-project mappings only. This property does not apply to non-draft workflows.
 * @member {module:model/User} lastModifiedUser
 */

WorkflowScheme.prototype['lastModifiedUser'] = undefined;
/**
 * The name of the workflow scheme. The name must be unique. The maximum length is 255 characters. Required when creating a workflow scheme.
 * @member {String} name
 */

WorkflowScheme.prototype['name'] = undefined;
/**
 * For draft workflow schemes, this property is the name of the default workflow for the original workflow scheme. The default workflow has *All Unassigned Issue Types* assigned to it in Jira.
 * @member {String} originalDefaultWorkflow
 */

WorkflowScheme.prototype['originalDefaultWorkflow'] = undefined;
/**
 * For draft workflow schemes, this property is the issue type to workflow mappings for the original workflow scheme, where each mapping is an issue type ID and workflow name pair. Note that an issue type can only be mapped to one workflow in a workflow scheme.
 * @member {Object.<String, String>} originalIssueTypeMappings
 */

WorkflowScheme.prototype['originalIssueTypeMappings'] = undefined;
/**
 * @member {String} self
 */

WorkflowScheme.prototype['self'] = undefined;
/**
 * Whether to create or update a draft workflow scheme when updating an active workflow scheme. An active workflow scheme is a workflow scheme that is used by at least one project. The following examples show how this property works:   *  Update an active workflow scheme with `updateDraftIfNeeded` set to `true`: If a draft workflow scheme exists, it is updated. Otherwise, a draft workflow scheme is created.  *  Update an active workflow scheme with `updateDraftIfNeeded` set to `false`: An error is returned, as active workflow schemes cannot be updated.  *  Update an inactive workflow scheme with `updateDraftIfNeeded` set to `true`: The workflow scheme is updated, as inactive workflow schemes do not require drafts to update.  Defaults to `false`.
 * @member {Boolean} updateDraftIfNeeded
 */

WorkflowScheme.prototype['updateDraftIfNeeded'] = undefined;
var _default = WorkflowScheme;
exports["default"] = _default;