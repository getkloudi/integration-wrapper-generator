"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FilterIdPermissionProject = _interopRequireDefault(require("./FilterIdPermissionProject"));

var _InlineResponse20037FieldsAttachment = _interopRequireDefault(require("./InlineResponse20037FieldsAttachment"));

var _InlineResponse20037FieldsIssuelinks = _interopRequireDefault(require("./InlineResponse20037FieldsIssuelinks"));

var _InlineResponse20037FieldsSubTasks = _interopRequireDefault(require("./InlineResponse20037FieldsSubTasks"));

var _InlineResponse20037FieldsTimetracking = _interopRequireDefault(require("./InlineResponse20037FieldsTimetracking"));

var _InlineResponse20037FieldsWatcher = _interopRequireDefault(require("./InlineResponse20037FieldsWatcher"));

var _InlineResponse20037FieldsWorklog = _interopRequireDefault(require("./InlineResponse20037FieldsWorklog"));

var _InlineResponse2009Body = _interopRequireDefault(require("./InlineResponse2009Body"));

var _InlineResponse2009Values = _interopRequireDefault(require("./InlineResponse2009Values"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse20037Fields model module.
 * @module model/InlineResponse20037Fields
 * @version 1.0.0
 */
var InlineResponse20037Fields = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20037Fields</code>.
   * @alias module:model/InlineResponse20037Fields
   * @param attachment {Array.<module:model/InlineResponse20037FieldsAttachment>} 
   * @param comment {Array.<module:model/InlineResponse2009Values>} 
   * @param description {module:model/InlineResponse2009Body} 
   * @param issuelinks {Array.<module:model/InlineResponse20037FieldsIssuelinks>} 
   * @param project {module:model/FilterIdPermissionProject} 
   * @param subTasks {Array.<module:model/InlineResponse20037FieldsSubTasks>} 
   * @param timetracking {module:model/InlineResponse20037FieldsTimetracking} 
   * @param updated {Number} 
   * @param watcher {module:model/InlineResponse20037FieldsWatcher} 
   * @param worklog {Array.<module:model/InlineResponse20037FieldsWorklog>} 
   */
  function InlineResponse20037Fields(attachment, comment, description, issuelinks, project, subTasks, timetracking, updated, watcher, worklog) {
    _classCallCheck(this, InlineResponse20037Fields);

    InlineResponse20037Fields.initialize(this, attachment, comment, description, issuelinks, project, subTasks, timetracking, updated, watcher, worklog);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20037Fields, null, [{
    key: "initialize",
    value: function initialize(obj, attachment, comment, description, issuelinks, project, subTasks, timetracking, updated, watcher, worklog) {
      obj['attachment'] = attachment;
      obj['comment'] = comment;
      obj['description'] = description;
      obj['issuelinks'] = issuelinks;
      obj['project'] = project;
      obj['sub-tasks'] = subTasks;
      obj['timetracking'] = timetracking;
      obj['updated'] = updated;
      obj['watcher'] = watcher;
      obj['worklog'] = worklog;
    }
    /**
     * Constructs a <code>InlineResponse20037Fields</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20037Fields} obj Optional instance to populate.
     * @return {module:model/InlineResponse20037Fields} The populated <code>InlineResponse20037Fields</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20037Fields();

        if (data.hasOwnProperty('attachment')) {
          obj['attachment'] = _ApiClient["default"].convertToType(data['attachment'], [_InlineResponse20037FieldsAttachment["default"]]);
        }

        if (data.hasOwnProperty('comment')) {
          obj['comment'] = _ApiClient["default"].convertToType(data['comment'], [_InlineResponse2009Values["default"]]);
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _InlineResponse2009Body["default"].constructFromObject(data['description']);
        }

        if (data.hasOwnProperty('issuelinks')) {
          obj['issuelinks'] = _ApiClient["default"].convertToType(data['issuelinks'], [_InlineResponse20037FieldsIssuelinks["default"]]);
        }

        if (data.hasOwnProperty('project')) {
          obj['project'] = _FilterIdPermissionProject["default"].constructFromObject(data['project']);
        }

        if (data.hasOwnProperty('sub-tasks')) {
          obj['sub-tasks'] = _ApiClient["default"].convertToType(data['sub-tasks'], [_InlineResponse20037FieldsSubTasks["default"]]);
        }

        if (data.hasOwnProperty('timetracking')) {
          obj['timetracking'] = _InlineResponse20037FieldsTimetracking["default"].constructFromObject(data['timetracking']);
        }

        if (data.hasOwnProperty('updated')) {
          obj['updated'] = _ApiClient["default"].convertToType(data['updated'], 'Number');
        }

        if (data.hasOwnProperty('watcher')) {
          obj['watcher'] = _InlineResponse20037FieldsWatcher["default"].constructFromObject(data['watcher']);
        }

        if (data.hasOwnProperty('worklog')) {
          obj['worklog'] = _ApiClient["default"].convertToType(data['worklog'], [_InlineResponse20037FieldsWorklog["default"]]);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20037Fields;
}();
/**
 * @member {Array.<module:model/InlineResponse20037FieldsAttachment>} attachment
 */


InlineResponse20037Fields.prototype['attachment'] = undefined;
/**
 * @member {Array.<module:model/InlineResponse2009Values>} comment
 */

InlineResponse20037Fields.prototype['comment'] = undefined;
/**
 * @member {module:model/InlineResponse2009Body} description
 */

InlineResponse20037Fields.prototype['description'] = undefined;
/**
 * @member {Array.<module:model/InlineResponse20037FieldsIssuelinks>} issuelinks
 */

InlineResponse20037Fields.prototype['issuelinks'] = undefined;
/**
 * @member {module:model/FilterIdPermissionProject} project
 */

InlineResponse20037Fields.prototype['project'] = undefined;
/**
 * @member {Array.<module:model/InlineResponse20037FieldsSubTasks>} sub-tasks
 */

InlineResponse20037Fields.prototype['sub-tasks'] = undefined;
/**
 * @member {module:model/InlineResponse20037FieldsTimetracking} timetracking
 */

InlineResponse20037Fields.prototype['timetracking'] = undefined;
/**
 * @member {Number} updated
 */

InlineResponse20037Fields.prototype['updated'] = undefined;
/**
 * @member {module:model/InlineResponse20037FieldsWatcher} watcher
 */

InlineResponse20037Fields.prototype['watcher'] = undefined;
/**
 * @member {Array.<module:model/InlineResponse20037FieldsWorklog>} worklog
 */

InlineResponse20037Fields.prototype['worklog'] = undefined;
var _default = InlineResponse20037Fields;
exports["default"] = _default;