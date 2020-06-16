"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IssueTypeInfo = _interopRequireDefault(require("./IssueTypeInfo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ProjectIssueTypesHierarchyLevel model module.
 * @module model/ProjectIssueTypesHierarchyLevel
 * @version 1.4.0
 */
var ProjectIssueTypesHierarchyLevel = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ProjectIssueTypesHierarchyLevel</code>.
   * Details of an issue type hierarchy level.
   * @alias module:model/ProjectIssueTypesHierarchyLevel
   */
  function ProjectIssueTypesHierarchyLevel() {
    _classCallCheck(this, ProjectIssueTypesHierarchyLevel);

    ProjectIssueTypesHierarchyLevel.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ProjectIssueTypesHierarchyLevel, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ProjectIssueTypesHierarchyLevel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectIssueTypesHierarchyLevel} obj Optional instance to populate.
     * @return {module:model/ProjectIssueTypesHierarchyLevel} The populated <code>ProjectIssueTypesHierarchyLevel</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProjectIssueTypesHierarchyLevel();

        if (data.hasOwnProperty('entityId')) {
          obj['entityId'] = _ApiClient["default"].convertToType(data['entityId'], 'String');
        }

        if (data.hasOwnProperty('issueTypes')) {
          obj['issueTypes'] = _ApiClient["default"].convertToType(data['issueTypes'], [_IssueTypeInfo["default"]]);
        }

        if (data.hasOwnProperty('level')) {
          obj['level'] = _ApiClient["default"].convertToType(data['level'], 'Number');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ProjectIssueTypesHierarchyLevel;
}();
/**
 * The ID of the issue type hierarchy level.
 * @member {String} entityId
 */


ProjectIssueTypesHierarchyLevel.prototype['entityId'] = undefined;
/**
 * The list of issue types in the hierarchy level.
 * @member {Array.<module:model/IssueTypeInfo>} issueTypes
 */

ProjectIssueTypesHierarchyLevel.prototype['issueTypes'] = undefined;
/**
 * The level of the issue type hierarchy level.
 * @member {Number} level
 */

ProjectIssueTypesHierarchyLevel.prototype['level'] = undefined;
/**
 * The name of the issue type hierarchy level.
 * @member {String} name
 */

ProjectIssueTypesHierarchyLevel.prototype['name'] = undefined;
var _default = ProjectIssueTypesHierarchyLevel;
exports["default"] = _default;