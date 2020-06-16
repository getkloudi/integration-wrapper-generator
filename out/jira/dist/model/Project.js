"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AvatarUrlsBean = _interopRequireDefault(require("./AvatarUrlsBean"));

var _Component = _interopRequireDefault(require("./Component"));

var _Hierarchy = _interopRequireDefault(require("./Hierarchy"));

var _IssueTypeDetails = _interopRequireDefault(require("./IssueTypeDetails"));

var _ProjectCategory = _interopRequireDefault(require("./ProjectCategory"));

var _ProjectInsight = _interopRequireDefault(require("./ProjectInsight"));

var _ProjectPermissions = _interopRequireDefault(require("./ProjectPermissions"));

var _User = _interopRequireDefault(require("./User"));

var _Version = _interopRequireDefault(require("./Version"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Project model module.
 * @module model/Project
 * @version 1.4.0
 */
var Project = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Project</code>.
   * Details about a project.
   * @alias module:model/Project
   */
  function Project() {
    _classCallCheck(this, Project);

    Project.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Project, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Project</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Project} obj Optional instance to populate.
     * @return {module:model/Project} The populated <code>Project</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Project();

        if (data.hasOwnProperty('components')) {
          obj['components'] = _ApiClient["default"].convertToType(data['components'], [_Component["default"]]);
        }

        if (data.hasOwnProperty('archived')) {
          obj['archived'] = _ApiClient["default"].convertToType(data['archived'], 'Boolean');
        }

        if (data.hasOwnProperty('archivedBy')) {
          obj['archivedBy'] = _ApiClient["default"].convertToType(data['archivedBy'], _User["default"]);
        }

        if (data.hasOwnProperty('archivedDate')) {
          obj['archivedDate'] = _ApiClient["default"].convertToType(data['archivedDate'], 'Date');
        }

        if (data.hasOwnProperty('assigneeType')) {
          obj['assigneeType'] = _ApiClient["default"].convertToType(data['assigneeType'], 'String');
        }

        if (data.hasOwnProperty('avatarUrls')) {
          obj['avatarUrls'] = _ApiClient["default"].convertToType(data['avatarUrls'], _AvatarUrlsBean["default"]);
        }

        if (data.hasOwnProperty('deleted')) {
          obj['deleted'] = _ApiClient["default"].convertToType(data['deleted'], 'Boolean');
        }

        if (data.hasOwnProperty('deletedBy')) {
          obj['deletedBy'] = _ApiClient["default"].convertToType(data['deletedBy'], _User["default"]);
        }

        if (data.hasOwnProperty('deletedDate')) {
          obj['deletedDate'] = _ApiClient["default"].convertToType(data['deletedDate'], 'Date');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('expand')) {
          obj['expand'] = _ApiClient["default"].convertToType(data['expand'], 'String');
        }

        if (data.hasOwnProperty('favourite')) {
          obj['favourite'] = _ApiClient["default"].convertToType(data['favourite'], 'Boolean');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('insight')) {
          obj['insight'] = _ApiClient["default"].convertToType(data['insight'], _ProjectInsight["default"]);
        }

        if (data.hasOwnProperty('isPrivate')) {
          obj['isPrivate'] = _ApiClient["default"].convertToType(data['isPrivate'], 'Boolean');
        }

        if (data.hasOwnProperty('issueTypeHierarchy')) {
          obj['issueTypeHierarchy'] = _ApiClient["default"].convertToType(data['issueTypeHierarchy'], _Hierarchy["default"]);
        }

        if (data.hasOwnProperty('issueTypes')) {
          obj['issueTypes'] = _ApiClient["default"].convertToType(data['issueTypes'], [_IssueTypeDetails["default"]]);
        }

        if (data.hasOwnProperty('key')) {
          obj['key'] = _ApiClient["default"].convertToType(data['key'], 'String');
        }

        if (data.hasOwnProperty('lead')) {
          obj['lead'] = _ApiClient["default"].convertToType(data['lead'], _User["default"]);
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('permissions')) {
          obj['permissions'] = _ApiClient["default"].convertToType(data['permissions'], _ProjectPermissions["default"]);
        }

        if (data.hasOwnProperty('projectCategory')) {
          obj['projectCategory'] = _ApiClient["default"].convertToType(data['projectCategory'], _ProjectCategory["default"]);
        }

        if (data.hasOwnProperty('projectTypeKey')) {
          obj['projectTypeKey'] = _ApiClient["default"].convertToType(data['projectTypeKey'], 'String');
        }

        if (data.hasOwnProperty('properties')) {
          obj['properties'] = _ApiClient["default"].convertToType(data['properties'], {
            'String': Object
          });
        }

        if (data.hasOwnProperty('retentionTillDate')) {
          obj['retentionTillDate'] = _ApiClient["default"].convertToType(data['retentionTillDate'], 'Date');
        }

        if (data.hasOwnProperty('roles')) {
          obj['roles'] = _ApiClient["default"].convertToType(data['roles'], {
            'String': 'String'
          });
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _ApiClient["default"].convertToType(data['self'], 'String');
        }

        if (data.hasOwnProperty('simplified')) {
          obj['simplified'] = _ApiClient["default"].convertToType(data['simplified'], 'Boolean');
        }

        if (data.hasOwnProperty('style')) {
          obj['style'] = _ApiClient["default"].convertToType(data['style'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }

        if (data.hasOwnProperty('uuid')) {
          obj['uuid'] = _ApiClient["default"].convertToType(data['uuid'], 'String');
        }

        if (data.hasOwnProperty('versions')) {
          obj['versions'] = _ApiClient["default"].convertToType(data['versions'], [_Version["default"]]);
        }
      }

      return obj;
    }
  }]);

  return Project;
}();
/**
 * List of the components contained in the project.
 * @member {Array.<module:model/Component>} components
 */


Project.prototype['components'] = undefined;
/**
 * Whether the project is archived.
 * @member {Boolean} archived
 */

Project.prototype['archived'] = undefined;
/**
 * The user who archived the project.
 * @member {module:model/User} archivedBy
 */

Project.prototype['archivedBy'] = undefined;
/**
 * The date when the project was archived.
 * @member {Date} archivedDate
 */

Project.prototype['archivedDate'] = undefined;
/**
 * The default assignee when creating issues for this project.
 * @member {module:model/Project.AssigneeTypeEnum} assigneeType
 */

Project.prototype['assigneeType'] = undefined;
/**
 * The URLs of the project's avatars.
 * @member {module:model/AvatarUrlsBean} avatarUrls
 */

Project.prototype['avatarUrls'] = undefined;
/**
 * Whether the project is marked as deleted.
 * @member {Boolean} deleted
 */

Project.prototype['deleted'] = undefined;
/**
 * The user who marked the project as deleted.
 * @member {module:model/User} deletedBy
 */

Project.prototype['deletedBy'] = undefined;
/**
 * The date when the project was marked as deleted.
 * @member {Date} deletedDate
 */

Project.prototype['deletedDate'] = undefined;
/**
 * A brief description of the project.
 * @member {String} description
 */

Project.prototype['description'] = undefined;
/**
 * An email address associated with the project.
 * @member {String} email
 */

Project.prototype['email'] = undefined;
/**
 * Expand options that include additional project details in the response.
 * @member {String} expand
 */

Project.prototype['expand'] = undefined;
/**
 * Whether the project is selected as a favorite.
 * @member {Boolean} favourite
 */

Project.prototype['favourite'] = undefined;
/**
 * The ID of the project.
 * @member {String} id
 */

Project.prototype['id'] = undefined;
/**
 * Insights about the project.
 * @member {module:model/ProjectInsight} insight
 */

Project.prototype['insight'] = undefined;
/**
 * Whether the project is private.
 * @member {Boolean} isPrivate
 */

Project.prototype['isPrivate'] = undefined;
/**
 * The issue type hierarchy for the project
 * @member {module:model/Hierarchy} issueTypeHierarchy
 */

Project.prototype['issueTypeHierarchy'] = undefined;
/**
 * List of the issue types available in the project.
 * @member {Array.<module:model/IssueTypeDetails>} issueTypes
 */

Project.prototype['issueTypes'] = undefined;
/**
 * The key of the project.
 * @member {String} key
 */

Project.prototype['key'] = undefined;
/**
 * The username of the project lead.
 * @member {module:model/User} lead
 */

Project.prototype['lead'] = undefined;
/**
 * The name of the project.
 * @member {String} name
 */

Project.prototype['name'] = undefined;
/**
 * User permissions on the project
 * @member {module:model/ProjectPermissions} permissions
 */

Project.prototype['permissions'] = undefined;
/**
 * The category the project belongs to.
 * @member {module:model/ProjectCategory} projectCategory
 */

Project.prototype['projectCategory'] = undefined;
/**
 * The [project type](https://confluence.atlassian.com/x/GwiiLQ#Jiraapplicationsoverview-Productfeaturesandprojecttypes) of the project.
 * @member {module:model/Project.ProjectTypeKeyEnum} projectTypeKey
 */

Project.prototype['projectTypeKey'] = undefined;
/**
 * Map of project properties
 * @member {Object.<String, Object>} properties
 */

Project.prototype['properties'] = undefined;
/**
 * The date when the project is deleted permanently.
 * @member {Date} retentionTillDate
 */

Project.prototype['retentionTillDate'] = undefined;
/**
 * The name and self URL for each role defined in the project. For more information, see [Create project role](#api-rest-api-3-role-post).
 * @member {Object.<String, String>} roles
 */

Project.prototype['roles'] = undefined;
/**
 * The URL of the project details.
 * @member {String} self
 */

Project.prototype['self'] = undefined;
/**
 * Whether the project is simplified.
 * @member {Boolean} simplified
 */

Project.prototype['simplified'] = undefined;
/**
 * The type of the project.
 * @member {module:model/Project.StyleEnum} style
 */

Project.prototype['style'] = undefined;
/**
 * A link to information about this project, such as project documentation.
 * @member {String} url
 */

Project.prototype['url'] = undefined;
/**
 * Unique ID for next-gen projects.
 * @member {String} uuid
 */

Project.prototype['uuid'] = undefined;
/**
 * The versions defined in the project. For more information, see [Create version](#api-rest-api-3-version-post).
 * @member {Array.<module:model/Version>} versions
 */

Project.prototype['versions'] = undefined;
/**
 * Allowed values for the <code>assigneeType</code> property.
 * @enum {String}
 * @readonly
 */

Project['AssigneeTypeEnum'] = {
  /**
   * value: "PROJECT_LEAD"
   * @const
   */
  "PROJECT_LEAD": "PROJECT_LEAD",

  /**
   * value: "UNASSIGNED"
   * @const
   */
  "UNASSIGNED": "UNASSIGNED"
};
/**
 * Allowed values for the <code>projectTypeKey</code> property.
 * @enum {String}
 * @readonly
 */

Project['ProjectTypeKeyEnum'] = {
  /**
   * value: "software"
   * @const
   */
  "software": "software",

  /**
   * value: "service_desk"
   * @const
   */
  "service_desk": "service_desk",

  /**
   * value: "business"
   * @const
   */
  "business": "business"
};
/**
 * Allowed values for the <code>style</code> property.
 * @enum {String}
 * @readonly
 */

Project['StyleEnum'] = {
  /**
   * value: "CLASSIC"
   * @const
   */
  "CLASSIC": "CLASSIC",

  /**
   * value: "NEXTGEN"
   * @const
   */
  "NEXTGEN": "NEXTGEN",

  /**
   * value: "classic"
   * @const
   */
  "classic": "classic",

  /**
   * value: "next-gen"
   * @const
   */
  "next-gen": "next-gen"
};
var _default = Project;
exports["default"] = _default;