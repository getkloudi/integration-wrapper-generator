"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _User = _interopRequireDefault(require("./User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Component model module.
 * @module model/Component
 * @version 1.4.0
 */
var Component = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Component</code>.
   * Details about a project component.
   * @alias module:model/Component
   */
  function Component() {
    _classCallCheck(this, Component);

    Component.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Component, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Component</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Component} obj Optional instance to populate.
     * @return {module:model/Component} The populated <code>Component</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Component();

        if (data.hasOwnProperty('assignee')) {
          obj['assignee'] = _ApiClient["default"].convertToType(data['assignee'], _User["default"]);
        }

        if (data.hasOwnProperty('assigneeType')) {
          obj['assigneeType'] = _ApiClient["default"].convertToType(data['assigneeType'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('isAssigneeTypeValid')) {
          obj['isAssigneeTypeValid'] = _ApiClient["default"].convertToType(data['isAssigneeTypeValid'], 'Boolean');
        }

        if (data.hasOwnProperty('lead')) {
          obj['lead'] = _ApiClient["default"].convertToType(data['lead'], _User["default"]);
        }

        if (data.hasOwnProperty('leadAccountId')) {
          obj['leadAccountId'] = _ApiClient["default"].convertToType(data['leadAccountId'], 'String');
        }

        if (data.hasOwnProperty('leadUserName')) {
          obj['leadUserName'] = _ApiClient["default"].convertToType(data['leadUserName'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('project')) {
          obj['project'] = _ApiClient["default"].convertToType(data['project'], 'String');
        }

        if (data.hasOwnProperty('projectId')) {
          obj['projectId'] = _ApiClient["default"].convertToType(data['projectId'], 'Number');
        }

        if (data.hasOwnProperty('realAssignee')) {
          obj['realAssignee'] = _ApiClient["default"].convertToType(data['realAssignee'], _User["default"]);
        }

        if (data.hasOwnProperty('realAssigneeType')) {
          obj['realAssigneeType'] = _ApiClient["default"].convertToType(data['realAssigneeType'], 'String');
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _ApiClient["default"].convertToType(data['self'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Component;
}();
/**
 * The details of the user associated with `assigneeType`, if any. See `realAssignee` for details of the user assigned to issues created with this component.
 * @member {module:model/User} assignee
 */


Component.prototype['assignee'] = undefined;
/**
 * The nominal user type used to determine the assignee for issues created with this component. See `realAssigneeType` for details on how the type of the user, and hence the user, assigned to issues is determined. Can take the following values:   *  `PROJECT_LEAD` the assignee to any issues created with this component is nominally the lead for the project the component is in.  *  `COMPONENT_LEAD` the assignee to any issues created with this component is nominally the lead for the component.  *  `UNASSIGNED` an assignee is not set for issues created with this component.  *  `PROJECT_DEFAULT` the assignee to any issues created with this component is nominally the default assignee for the project that the component is in.  Default value: `PROJECT_DEFAULT`.   Optional when creating or updating a component.
 * @member {module:model/Component.AssigneeTypeEnum} assigneeType
 */

Component.prototype['assigneeType'] = undefined;
/**
 * The description for the component. Optional when creating or updating a component.
 * @member {String} description
 */

Component.prototype['description'] = undefined;
/**
 * The unique identifier for the component.
 * @member {String} id
 */

Component.prototype['id'] = undefined;
/**
 * Whether a user is associated with `assigneeType`. For example, if the `assigneeType` is set to `COMPONENT_LEAD` but the component lead is not set, then `false` is returned.
 * @member {Boolean} isAssigneeTypeValid
 */

Component.prototype['isAssigneeTypeValid'] = undefined;
/**
 * The user details for the component's lead user.
 * @member {module:model/User} lead
 */

Component.prototype['lead'] = undefined;
/**
 * The accountId of the component's lead user. The accountId uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
 * @member {String} leadAccountId
 */

Component.prototype['leadAccountId'] = undefined;
/**
 * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
 * @member {String} leadUserName
 */

Component.prototype['leadUserName'] = undefined;
/**
 * The unique name for the component in the project. Required when creating a component. Optional when updating a component. The maximum length is 255 characters.
 * @member {String} name
 */

Component.prototype['name'] = undefined;
/**
 * The key of the project the component is assigned to. Required when creating a component. Can't be updated.
 * @member {String} project
 */

Component.prototype['project'] = undefined;
/**
 * The ID of the project the component is assigned to.
 * @member {Number} projectId
 */

Component.prototype['projectId'] = undefined;
/**
 * The user assigned to issues created with this component, when `assigneeType` does not identify a valid assignee.
 * @member {module:model/User} realAssignee
 */

Component.prototype['realAssignee'] = undefined;
/**
 * The type of the assignee that is assigned to issues created with this component, when an assignee cannot be set from the `assigneeType`. For example, `assigneeType` is set to `COMPONENT_LEAD` but no component lead is set. This property is set to one of the following values:   *  `PROJECT_LEAD` when `assigneeType` is `PROJECT_LEAD` and the project lead has permission to be assigned issues in the project that the component is in.  *  `COMPONENT_LEAD` when `assignee`Type is `COMPONENT_LEAD` and the component lead has permission to be assigned issues in the project that the component is in.  *  `UNASSIGNED` when `assigneeType` is `UNASSIGNED` and Jira is configured to allow unassigned issues.  *  `PROJECT_DEFAULT` when none of the preceding cases are true.
 * @member {module:model/Component.RealAssigneeTypeEnum} realAssigneeType
 */

Component.prototype['realAssigneeType'] = undefined;
/**
 * The URL of the component.
 * @member {String} self
 */

Component.prototype['self'] = undefined;
/**
 * Allowed values for the <code>assigneeType</code> property.
 * @enum {String}
 * @readonly
 */

Component['AssigneeTypeEnum'] = {
  /**
   * value: "PROJECT_DEFAULT"
   * @const
   */
  "PROJECT_DEFAULT": "PROJECT_DEFAULT",

  /**
   * value: "COMPONENT_LEAD"
   * @const
   */
  "COMPONENT_LEAD": "COMPONENT_LEAD",

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
 * Allowed values for the <code>realAssigneeType</code> property.
 * @enum {String}
 * @readonly
 */

Component['RealAssigneeTypeEnum'] = {
  /**
   * value: "PROJECT_DEFAULT"
   * @const
   */
  "PROJECT_DEFAULT": "PROJECT_DEFAULT",

  /**
   * value: "COMPONENT_LEAD"
   * @const
   */
  "COMPONENT_LEAD": "COMPONENT_LEAD",

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
var _default = Component;
exports["default"] = _default;