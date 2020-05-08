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
 * The InlineObject42 model module.
 * @module model/InlineObject42
 * @version 1.3.0
 */
var InlineObject42 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject42</code>.
   * @alias module:model/InlineObject42
   */
  function InlineObject42() {
    _classCallCheck(this, InlineObject42);

    InlineObject42.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject42, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineObject42</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject42} obj Optional instance to populate.
     * @return {module:model/InlineObject42} The populated <code>InlineObject42</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject42();

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

  return InlineObject42;
}();
/**
 * The default assignee when creating issues for this project.
 * @member {module:model/InlineObject42.AssigneeTypeEnum} assigneeType
 */


InlineObject42.prototype['assigneeType'] = undefined;
/**
 * An integer value for the project's avatar.
 * @member {Number} avatarId
 */

InlineObject42.prototype['avatarId'] = undefined;
/**
 * The ID of the project's category. A complete list of category IDs can be found using the Get all project categories resource.
 * @member {Number} categoryId
 */

InlineObject42.prototype['categoryId'] = undefined;
/**
 * A brief description of the project.
 * @member {String} description
 */

InlineObject42.prototype['description'] = undefined;
/**
 * The ID of the issue security scheme for the project, which enables you to control who can and cannot view issues. Use the Get issue security schemes resource to get all issue security scheme IDs.
 * @member {Number} issueSecurityScheme
 */

InlineObject42.prototype['issueSecurityScheme'] = undefined;
/**
 * Project keys must be unique and start with an uppercase letter followed by one or more uppercase alphanumeric characters. Max length is 10 characters. Required when creating a project. Optional when updating a project.
 * @member {String} key
 */

InlineObject42.prototype['key'] = undefined;
/**
 * Sets the username of the project lead. Either lead or leadAccountId should be setwhen creating a project. Optional when updating a project.
 * @member {String} lead
 */

InlineObject42.prototype['lead'] = undefined;
/**
 * Sets the project lead account id.Either lead or leadAccountId should be setwhen creating a project. Optional when updating a project.
 * @member {String} leadAccountId
 */

InlineObject42.prototype['leadAccountId'] = undefined;
/**
 * The name of the project. Required when creating a project. Optional when updating a project.
 * @member {String} name
 */

InlineObject42.prototype['name'] = undefined;
/**
 * The ID of the notification scheme for the project. Use the Get notification schemes resource to get a list of notification scheme IDs.
 * @member {Number} notificationScheme
 */

InlineObject42.prototype['notificationScheme'] = undefined;
/**
 * The ID of the permission scheme for the project. Use the Get all permission schemes resource to see a list of all permission scheme IDs.
 * @member {Number} permissionScheme
 */

InlineObject42.prototype['permissionScheme'] = undefined;
/**
 * A prebuilt configuration for a project. The type of the projectTemplateKey must match with the type of the projectTypeKey. Required when creating a project. Not applicable for the Update project resource.
 * @member {module:model/InlineObject42.ProjectTemplateKeyEnum} projectTemplateKey
 */

InlineObject42.prototype['projectTemplateKey'] = undefined;
/**
 * The project type, which dictates the application-specific feature set. Required when creating a project. Not applicable for the Update project resource. See the Update project type resource instead.
 * @member {module:model/InlineObject42.ProjectTypeKeyEnum} projectTypeKey
 */

InlineObject42.prototype['projectTypeKey'] = undefined;
/**
 * A link to information about this project, such as project documentation
 * @member {String} url
 */

InlineObject42.prototype['url'] = undefined;
/**
 * Allowed values for the <code>assigneeType</code> property.
 * @enum {String}
 * @readonly
 */

InlineObject42['AssigneeTypeEnum'] = {
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

InlineObject42['ProjectTemplateKeyEnum'] = {
  /**
   * value: "com.pyxis.greenhopper.jira:gh-simplified-agility"
   * @const
   */
  "pyxis.greenhopper.jira:gh-simplified-agility": "com.pyxis.greenhopper.jira:gh-simplified-agility",

  /**
   * value: "com.pyxis.greenhopper.jira:gh-simplified-basic"
   * @const
   */
  "pyxis.greenhopper.jira:gh-simplified-basic": "com.pyxis.greenhopper.jira:gh-simplified-basic",

  /**
   * value: "com.pyxis.greenhopper.jira:gh-simplified-kanban"
   * @const
   */
  "pyxis.greenhopper.jira:gh-simplified-kanban": "com.pyxis.greenhopper.jira:gh-simplified-kanban",

  /**
   * value: "com.pyxis.greenhopper.jira:gh-simplified-scrum"
   * @const
   */
  "pyxis.greenhopper.jira:gh-simplified-scrum": "com.pyxis.greenhopper.jira:gh-simplified-scrum",

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
  "atlassian.jira-core-project-templates:jira-core-simplified-lead-tracking": "com.atlassian.jira-core-project-templates:jira-core-simplified-lead-tracking"
};
/**
 * Allowed values for the <code>projectTypeKey</code> property.
 * @enum {String}
 * @readonly
 */

InlineObject42['ProjectTypeKeyEnum'] = {
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
var _default = InlineObject42;
exports["default"] = _default;