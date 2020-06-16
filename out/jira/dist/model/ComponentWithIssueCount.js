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
 * The ComponentWithIssueCount model module.
 * @module model/ComponentWithIssueCount
 * @version 1.4.0
 */
var ComponentWithIssueCount = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ComponentWithIssueCount</code>.
   * Details about a component with a count of the issues it contains.
   * @alias module:model/ComponentWithIssueCount
   */
  function ComponentWithIssueCount() {
    _classCallCheck(this, ComponentWithIssueCount);

    ComponentWithIssueCount.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ComponentWithIssueCount, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ComponentWithIssueCount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ComponentWithIssueCount} obj Optional instance to populate.
     * @return {module:model/ComponentWithIssueCount} The populated <code>ComponentWithIssueCount</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ComponentWithIssueCount();

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

        if (data.hasOwnProperty('issueCount')) {
          obj['issueCount'] = _ApiClient["default"].convertToType(data['issueCount'], 'Number');
        }

        if (data.hasOwnProperty('lead')) {
          obj['lead'] = _ApiClient["default"].convertToType(data['lead'], _User["default"]);
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

  return ComponentWithIssueCount;
}();
/**
 * The details of the user associated with `assigneeType`, if any. See `realAssignee` for details of the user assigned to issues created with this component.
 * @member {module:model/User} assignee
 */


ComponentWithIssueCount.prototype['assignee'] = undefined;
/**
 * The nominal user type used to determine the assignee for issues created with this component. See `realAssigneeType` for details on how the type of the user, and hence the user, assigned to issues is determined. Takes the following values:   *  `PROJECT_LEAD` the assignee to any issues created with this component is nominally the lead for the project the component is in.  *  `COMPONENT_LEAD` the assignee to any issues created with this component is nominally the lead for the component.  *  `UNASSIGNED` an assignee is not set for issues created with this component.  *  `PROJECT_DEFAULT` the assignee to any issues created with this component is nominally the default assignee for the project that the component is in.
 * @member {module:model/ComponentWithIssueCount.AssigneeTypeEnum} assigneeType
 */

ComponentWithIssueCount.prototype['assigneeType'] = undefined;
/**
 * The description for the component.
 * @member {String} description
 */

ComponentWithIssueCount.prototype['description'] = undefined;
/**
 * The unique identifier for the component.
 * @member {String} id
 */

ComponentWithIssueCount.prototype['id'] = undefined;
/**
 * Whether a user is associated with `assigneeType`. For example, if the `assigneeType` is set to `COMPONENT_LEAD` but the component lead is not set, then `false` is returned.
 * @member {Boolean} isAssigneeTypeValid
 */

ComponentWithIssueCount.prototype['isAssigneeTypeValid'] = undefined;
/**
 * Count of issues for the component.
 * @member {Number} issueCount
 */

ComponentWithIssueCount.prototype['issueCount'] = undefined;
/**
 * The user details for the component's lead user.
 * @member {module:model/User} lead
 */

ComponentWithIssueCount.prototype['lead'] = undefined;
/**
 * The name for the component.
 * @member {String} name
 */

ComponentWithIssueCount.prototype['name'] = undefined;
/**
 * The key of the project to which the component is assigned.
 * @member {String} project
 */

ComponentWithIssueCount.prototype['project'] = undefined;
/**
 * Not used.
 * @member {Number} projectId
 */

ComponentWithIssueCount.prototype['projectId'] = undefined;
/**
 * The user assigned to issues created with this component, when `assigneeType` does not identify a valid assignee.
 * @member {module:model/User} realAssignee
 */

ComponentWithIssueCount.prototype['realAssignee'] = undefined;
/**
 * The type of the assignee that is assigned to issues created with this component, when an assignee cannot be set from the `assigneeType`. For example, `assigneeType` is set to `COMPONENT_LEAD` but no component lead is set. This property is set to one of the following values:   *  `PROJECT_LEAD` when `assigneeType` is `PROJECT_LEAD` and the project lead has permission to be assigned issues in the project that the component is in.  *  `COMPONENT_LEAD` when `assignee`Type is `COMPONENT_LEAD` and the component lead has permission to be assigned issues in the project that the component is in.  *  `UNASSIGNED` when `assigneeType` is `UNASSIGNED` and Jira is configured to allow unassigned issues.  *  `PROJECT_DEFAULT` when none of the preceding cases are true.
 * @member {module:model/ComponentWithIssueCount.RealAssigneeTypeEnum} realAssigneeType
 */

ComponentWithIssueCount.prototype['realAssigneeType'] = undefined;
/**
 * The URL for this count of the issues contained in the component.
 * @member {String} self
 */

ComponentWithIssueCount.prototype['self'] = undefined;
/**
 * Allowed values for the <code>assigneeType</code> property.
 * @enum {String}
 * @readonly
 */

ComponentWithIssueCount['AssigneeTypeEnum'] = {
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

ComponentWithIssueCount['RealAssigneeTypeEnum'] = {
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
var _default = ComponentWithIssueCount;
exports["default"] = _default;