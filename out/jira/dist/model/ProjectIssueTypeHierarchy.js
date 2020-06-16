"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ProjectIssueTypesHierarchyLevel = _interopRequireDefault(require("./ProjectIssueTypesHierarchyLevel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ProjectIssueTypeHierarchy model module.
 * @module model/ProjectIssueTypeHierarchy
 * @version 1.4.0
 */
var ProjectIssueTypeHierarchy = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ProjectIssueTypeHierarchy</code>.
   * The hierarchy of issue types within a project.
   * @alias module:model/ProjectIssueTypeHierarchy
   */
  function ProjectIssueTypeHierarchy() {
    _classCallCheck(this, ProjectIssueTypeHierarchy);

    ProjectIssueTypeHierarchy.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ProjectIssueTypeHierarchy, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ProjectIssueTypeHierarchy</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectIssueTypeHierarchy} obj Optional instance to populate.
     * @return {module:model/ProjectIssueTypeHierarchy} The populated <code>ProjectIssueTypeHierarchy</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProjectIssueTypeHierarchy();

        if (data.hasOwnProperty('hierarchy')) {
          obj['hierarchy'] = _ApiClient["default"].convertToType(data['hierarchy'], [_ProjectIssueTypesHierarchyLevel["default"]]);
        }

        if (data.hasOwnProperty('projectId')) {
          obj['projectId'] = _ApiClient["default"].convertToType(data['projectId'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ProjectIssueTypeHierarchy;
}();
/**
 * Details of an issue type hierarchy level.
 * @member {Array.<module:model/ProjectIssueTypesHierarchyLevel>} hierarchy
 */


ProjectIssueTypeHierarchy.prototype['hierarchy'] = undefined;
/**
 * The ID of the project.
 * @member {Number} projectId
 */

ProjectIssueTypeHierarchy.prototype['projectId'] = undefined;
var _default = ProjectIssueTypeHierarchy;
exports["default"] = _default;