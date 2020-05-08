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
 * The InlineObject3 model module.
 * @module model/InlineObject3
 * @version 1.3.1
 */
var InlineObject3 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject3</code>.
   * @alias module:model/InlineObject3
   */
  function InlineObject3() {
    _classCallCheck(this, InlineObject3);

    InlineObject3.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject3, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineObject3</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject3} obj Optional instance to populate.
     * @return {module:model/InlineObject3} The populated <code>InlineObject3</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject3();

        if (data.hasOwnProperty('assignee')) {
          obj['assignee'] = _ApiClient["default"].convertToType(data['assignee'], Object);
        }

        if (data.hasOwnProperty('assigneeType')) {
          obj['assigneeType'] = _ApiClient["default"].convertToType(data['assigneeType'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('lead')) {
          obj['lead'] = _ApiClient["default"].convertToType(data['lead'], Object);
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
          obj['realAssignee'] = _ApiClient["default"].convertToType(data['realAssignee'], Object);
        }
      }

      return obj;
    }
  }]);

  return InlineObject3;
}();
/**
 * A user.
 * @member {Object} assignee
 */


InlineObject3.prototype['assignee'] = undefined;
/**
 * The nominal user type used to determine the assignee for issues created with this component. See realAssigneeType for details on how the type of the user, and hence the user, assigned to issues is determined. Can take the following values:
 * @member {module:model/InlineObject3.AssigneeTypeEnum} assigneeType
 */

InlineObject3.prototype['assigneeType'] = undefined;
/**
 * The description for the component. Optional when creating or updating a component.
 * @member {String} description
 */

InlineObject3.prototype['description'] = undefined;
/**
 * A user.
 * @member {Object} lead
 */

InlineObject3.prototype['lead'] = undefined;
/**
 * The accountId of the component's lead user. The accountId uniquely identifies the user across all Atlassian products. For example, 384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192.Optional when creating or updating a component.
 * @member {String} leadAccountId
 */

InlineObject3.prototype['leadAccountId'] = undefined;
/**
 * This property has been deprecated in favour of leadAccountId due to privacy changes. See the migration guide for details.The username of the component's lead user. Optional when creating or updating a component.
 * @member {String} leadUserName
 */

InlineObject3.prototype['leadUserName'] = undefined;
/**
 * The unique name for the component in the project. Required when creating a component. Optional when updating a component. Maximum length 255 chars.
 * @member {String} name
 */

InlineObject3.prototype['name'] = undefined;
/**
 * The key of the project to which the component is assigned. Required when creating a component. Can't be updated.
 * @member {String} project
 */

InlineObject3.prototype['project'] = undefined;
/**
 * Not used.
 * @member {Number} projectId
 */

InlineObject3.prototype['projectId'] = undefined;
/**
 * A user.
 * @member {Object} realAssignee
 */

InlineObject3.prototype['realAssignee'] = undefined;
/**
 * Allowed values for the <code>assigneeType</code> property.
 * @enum {String}
 * @readonly
 */

InlineObject3['AssigneeTypeEnum'] = {
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
var _default = InlineObject3;
exports["default"] = _default;