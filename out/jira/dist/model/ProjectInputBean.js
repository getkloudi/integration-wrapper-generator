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
 * The ProjectInputBean model module.
 * @module model/ProjectInputBean
 * @version 1.4.0
 */
var ProjectInputBean = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ProjectInputBean</code>.
   * @alias module:model/ProjectInputBean
   */
  function ProjectInputBean() {
    _classCallCheck(this, ProjectInputBean);

    ProjectInputBean.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ProjectInputBean, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ProjectInputBean</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectInputBean} obj Optional instance to populate.
     * @return {module:model/ProjectInputBean} The populated <code>ProjectInputBean</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProjectInputBean();

        if (data.hasOwnProperty('assigneeType')) {
          obj['assigneeType'] = _ApiClient["default"].convertToType(data['assigneeType'], 'String');
        }

        if (data.hasOwnProperty('avatarId')) {
          obj['avatarId'] = _ApiClient["default"].convertToType(data['avatarId'], 'Number');
        }

        if (data.hasOwnProperty('categoryId')) {
          obj['categoryId'] = _ApiClient["default"].convertToType(data['categoryId'], 'Number');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('issueSecurityScheme')) {
          obj['issueSecurityScheme'] = _ApiClient["default"].convertToType(data['issueSecurityScheme'], 'Number');
        }

        if (data.hasOwnProperty('key')) {
          obj['key'] = _ApiClient["default"].convertToType(data['key'], 'String');
        }

        if (data.hasOwnProperty('lead')) {
          obj['lead'] = _ApiClient["default"].convertToType(data['lead'], 'String');
        }

        if (data.hasOwnProperty('leadAccountId')) {
          obj['leadAccountId'] = _ApiClient["default"].convertToType(data['leadAccountId'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('notificationScheme')) {
          obj['notificationScheme'] = _ApiClient["default"].convertToType(data['notificationScheme'], 'Number');
        }

        if (data.hasOwnProperty('permissionScheme')) {
          obj['permissionScheme'] = _ApiClient["default"].convertToType(data['permissionScheme'], 'Number');
        }

        if (data.hasOwnProperty('projectTemplateKey')) {
          obj['projectTemplateKey'] = _ApiClient["default"].convertToType(data['projectTemplateKey'], 'String');
        }

        if (data.hasOwnProperty('projectTypeKey')) {
          obj['projectTypeKey'] = _ApiClient["default"].convertToType(data['projectTypeKey'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ProjectInputBean;
}();
/**
 * The default assignee when creating issues for this project.
 * @member {module:model/ProjectInputBean.AssigneeTypeEnum} assigneeType
 */


ProjectInputBean.prototype['assigneeType'] = undefined;
/**
 * An integer value for the project's avatar.
 * @member {Number} avatarId
 */

ProjectInputBean.prototype['avatarId'] = undefined;
/**
 * The ID of the project's category. A complete list of category IDs is found using the [Get all project categories](#api-rest-api-3-projectCategory-get) operation.
 * @member {Number} categoryId
 */

ProjectInputBean.prototype['categoryId'] = undefined;
/**
 * A brief description of the project.
 * @member {String} description
 */

ProjectInputBean.prototype['description'] = undefined;
/**
 * The ID of the issue security scheme for the project, which enables you to control who can and cannot view issues. Use the [Get issue security schemes](#api-rest-api-3-issuesecurityschemes-get) resource to get all issue security scheme IDs.
 * @member {Number} issueSecurityScheme
 */

ProjectInputBean.prototype['issueSecurityScheme'] = undefined;
/**
 * Project keys must be unique and start with an uppercase letter followed by one or more uppercase alphanumeric characters. The maximum length is 10 characters. Required when creating a project. Optional when updating a project.
 * @member {String} key
 */

ProjectInputBean.prototype['key'] = undefined;
/**
 * This parameter is deprecated because of privacy changes. Use `leadAccountId` instead. See the [migration guide](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details. The user name of the project lead. Either `lead` or `leadAccountId` must be set when creating a project. Optional when updating a project. Cannot be provided with `leadAccountId`.
 * @member {String} lead
 */

ProjectInputBean.prototype['lead'] = undefined;
/**
 * The account ID of the project lead. Either `lead` or `leadAccountId` must be set when creating a project. Optional when updating a project. Cannot be provided with `lead`.
 * @member {String} leadAccountId
 */

ProjectInputBean.prototype['leadAccountId'] = undefined;
/**
 * The name of the project. Required when creating a project. Optional when updating a project.
 * @member {String} name
 */

ProjectInputBean.prototype['name'] = undefined;
/**
 * The ID of the notification scheme for the project. Use the [Get notification schemes](#api-rest-api-3-notificationscheme-get) resource to get a list of notification scheme IDs.
 * @member {Number} notificationScheme
 */

ProjectInputBean.prototype['notificationScheme'] = undefined;
/**
 * The ID of the permission scheme for the project. Use the [Get all permission schemes](#api-rest-api-3-permissionscheme-get) resource to see a list of all permission scheme IDs.
 * @member {Number} permissionScheme
 */

ProjectInputBean.prototype['permissionScheme'] = undefined;
/**
 * A prebuilt configuration for a project. The type of the `projectTemplateKey` must match with the type of the `projectTypeKey`. Required when creating a project. Not applicable for the Update project resource.
 * @member {module:model/ProjectInputBean.ProjectTemplateKeyEnum} projectTemplateKey
 */

ProjectInputBean.prototype['projectTemplateKey'] = undefined;
/**
 * The [project type](https://confluence.atlassian.com/x/GwiiLQ#Jiraapplicationsoverview-Productfeaturesandprojecttypes), which dictates the application-specific feature set. Required when creating a project. Not applicable for the Update project resource.
 * @member {module:model/ProjectInputBean.ProjectTypeKeyEnum} projectTypeKey
 */

ProjectInputBean.prototype['projectTypeKey'] = undefined;
/**
 * A link to information about this project, such as project documentation
 * @member {String} url
 */

ProjectInputBean.prototype['url'] = undefined;
/**
 * Allowed values for the <code>assigneeType</code> property.
 * @enum {String}
 * @readonly
 */

ProjectInputBean['AssigneeTypeEnum'] = {
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
 * Allowed values for the <code>projectTemplateKey</code> property.
 * @enum {String}
 * @readonly
 */

ProjectInputBean['ProjectTemplateKeyEnum'] = {
  /**
   * value: "com.pyxis.greenhopper.jira:gh-simplified-agility-kanban"
   * @const
   */
  "pyxis.greenhopper.jira:gh-simplified-agility-kanban": "com.pyxis.greenhopper.jira:gh-simplified-agility-kanban",

  /**
   * value: "com.pyxis.greenhopper.jira:gh-simplified-agility-scrum"
   * @const
   */
  "pyxis.greenhopper.jira:gh-simplified-agility-scrum": "com.pyxis.greenhopper.jira:gh-simplified-agility-scrum",

  /**
   * value: "com.pyxis.greenhopper.jira:gh-simplified-basic"
   * @const
   */
  "pyxis.greenhopper.jira:gh-simplified-basic": "com.pyxis.greenhopper.jira:gh-simplified-basic",

  /**
   * value: "com.pyxis.greenhopper.jira:gh-simplified-kanban-classic"
   * @const
   */
  "pyxis.greenhopper.jira:gh-simplified-kanban-classic": "com.pyxis.greenhopper.jira:gh-simplified-kanban-classic",

  /**
   * value: "com.pyxis.greenhopper.jira:gh-simplified-scrum-classic"
   * @const
   */
  "pyxis.greenhopper.jira:gh-simplified-scrum-classic": "com.pyxis.greenhopper.jira:gh-simplified-scrum-classic",

  /**
   * value: "com.atlassian.servicedesk:simplified-it-service-desk"
   * @const
   */
  "atlassian.servicedesk:simplified-it-service-desk": "com.atlassian.servicedesk:simplified-it-service-desk",

  /**
   * value: "com.atlassian.servicedesk:simplified-internal-service-desk"
   * @const
   */
  "atlassian.servicedesk:simplified-internal-service-desk": "com.atlassian.servicedesk:simplified-internal-service-desk",

  /**
   * value: "com.atlassian.servicedesk:simplified-external-service-desk"
   * @const
   */
  "atlassian.servicedesk:simplified-external-service-desk": "com.atlassian.servicedesk:simplified-external-service-desk",

  /**
   * value: "com.atlassian.servicedesk:simplified-hr-service-desk"
   * @const
   */
  "atlassian.servicedesk:simplified-hr-service-desk": "com.atlassian.servicedesk:simplified-hr-service-desk",

  /**
   * value: "com.atlassian.servicedesk:simplified-facilities-service-desk"
   * @const
   */
  "atlassian.servicedesk:simplified-facilities-service-desk": "com.atlassian.servicedesk:simplified-facilities-service-desk",

  /**
   * value: "com.atlassian.jira-core-project-templates:jira-core-simplified-content-management"
   * @const
   */
  "atlassian.jira-core-project-templates:jira-core-simplified-content-management": "com.atlassian.jira-core-project-templates:jira-core-simplified-content-management",

  /**
   * value: "com.atlassian.jira-core-project-templates:jira-core-simplified-document-approval"
   * @const
   */
  "atlassian.jira-core-project-templates:jira-core-simplified-document-approval": "com.atlassian.jira-core-project-templates:jira-core-simplified-document-approval",

  /**
   * value: "com.atlassian.jira-core-project-templates:jira-core-simplified-lead-tracking"
   * @const
   */
  "atlassian.jira-core-project-templates:jira-core-simplified-lead-tracking": "com.atlassian.jira-core-project-templates:jira-core-simplified-lead-tracking",

  /**
   * value: "com.atlassian.jira-core-project-templates:jira-core-simplified-process-control"
   * @const
   */
  "atlassian.jira-core-project-templates:jira-core-simplified-process-control": "com.atlassian.jira-core-project-templates:jira-core-simplified-process-control",

  /**
   * value: "com.atlassian.jira-core-project-templates:jira-core-simplified-procurement"
   * @const
   */
  "atlassian.jira-core-project-templates:jira-core-simplified-procurement": "com.atlassian.jira-core-project-templates:jira-core-simplified-procurement",

  /**
   * value: "com.atlassian.jira-core-project-templates:jira-core-simplified-project-management"
   * @const
   */
  "atlassian.jira-core-project-templates:jira-core-simplified-project-management": "com.atlassian.jira-core-project-templates:jira-core-simplified-project-management",

  /**
   * value: "com.atlassian.jira-core-project-templates:jira-core-simplified-recruitment"
   * @const
   */
  "atlassian.jira-core-project-templates:jira-core-simplified-recruitment": "com.atlassian.jira-core-project-templates:jira-core-simplified-recruitment",

  /**
   * value: "com.atlassian.jira-core-project-templates:jira-core-simplified-task-"
   * @const
   */
  "atlassian.jira-core-project-templates:jira-core-simplified-task-": "com.atlassian.jira-core-project-templates:jira-core-simplified-task-",

  /**
   * value: "com.atlassian.jira.jira-incident-management-plugin:im-incident-management"
   * @const
   */
  "atlassian.jira.jira-incident-management-plugin:im-incident-management": "com.atlassian.jira.jira-incident-management-plugin:im-incident-management"
};
/**
 * Allowed values for the <code>projectTypeKey</code> property.
 * @enum {String}
 * @readonly
 */

ProjectInputBean['ProjectTypeKeyEnum'] = {
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
var _default = ProjectInputBean;
exports["default"] = _default;