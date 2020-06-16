"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GroupName = _interopRequireDefault(require("./GroupName"));

var _Project = _interopRequireDefault(require("./Project"));

var _ProjectRole = _interopRequireDefault(require("./ProjectRole"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SharePermission model module.
 * @module model/SharePermission
 * @version 1.4.0
 */
var SharePermission = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SharePermission</code>.
   * Details of a share permission for the filter.
   * @alias module:model/SharePermission
   * @param type {module:model/SharePermission.TypeEnum} The type of share permission:   *  `group` Shared with a group. If set in a request, then specify `sharePermission.group` as well.  *  `project` Shared with a project. If set in a request, then specify `sharePermission.project` as well.  *  `projectRole` Share with a project role in a project. This value is not returned in responses. It is used in requests, where it needs to be specify with `projectId` and `projectRoleId`.  *  `global` Shared globally. If set in a request, no other `sharePermission` properties need to be specified.  *  `loggedin` Shared with all logged-in users. Note: This value is set in a request by specifying `authenticated` as the `type`.  *  `project-unknown` Shared with a project that the user does not have access to. Cannot be set in a request.
   */
  function SharePermission(type) {
    _classCallCheck(this, SharePermission);

    SharePermission.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SharePermission, null, [{
    key: "initialize",
    value: function initialize(obj, type) {
      obj['type'] = type;
    }
    /**
     * Constructs a <code>SharePermission</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SharePermission} obj Optional instance to populate.
     * @return {module:model/SharePermission} The populated <code>SharePermission</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SharePermission();

        if (data.hasOwnProperty('group')) {
          obj['group'] = _ApiClient["default"].convertToType(data['group'], _GroupName["default"]);
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('project')) {
          obj['project'] = _ApiClient["default"].convertToType(data['project'], _Project["default"]);
        }

        if (data.hasOwnProperty('role')) {
          obj['role'] = _ApiClient["default"].convertToType(data['role'], _ProjectRole["default"]);
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return SharePermission;
}();
/**
 * The group that the filter is shared with. For a request, specify the `name` property for the group.
 * @member {module:model/GroupName} group
 */


SharePermission.prototype['group'] = undefined;
/**
 * The unique identifier of the share permission.
 * @member {Number} id
 */

SharePermission.prototype['id'] = undefined;
/**
 * The project that the filter is shared with. This is similar to the project object returned by [Get project](#api-rest-api-3-project-projectIdOrKey-get) but it contains a subset of the properties, which are: `self`, `id`, `key`, `assigneeType`, `name`, `roles`, `avatarUrls`, `projectType`, `simplified`.   For a request, specify the `id` for the project.
 * @member {module:model/Project} project
 */

SharePermission.prototype['project'] = undefined;
/**
 * The project role that the filter is shared with.   For a request, specify the `id` for the role. You must also specify the `project` object and `id` for the project that the role is in.
 * @member {module:model/ProjectRole} role
 */

SharePermission.prototype['role'] = undefined;
/**
 * The type of share permission:   *  `group` Shared with a group. If set in a request, then specify `sharePermission.group` as well.  *  `project` Shared with a project. If set in a request, then specify `sharePermission.project` as well.  *  `projectRole` Share with a project role in a project. This value is not returned in responses. It is used in requests, where it needs to be specify with `projectId` and `projectRoleId`.  *  `global` Shared globally. If set in a request, no other `sharePermission` properties need to be specified.  *  `loggedin` Shared with all logged-in users. Note: This value is set in a request by specifying `authenticated` as the `type`.  *  `project-unknown` Shared with a project that the user does not have access to. Cannot be set in a request.
 * @member {module:model/SharePermission.TypeEnum} type
 */

SharePermission.prototype['type'] = undefined;
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

SharePermission['TypeEnum'] = {
  /**
   * value: "group"
   * @const
   */
  "group": "group",

  /**
   * value: "project"
   * @const
   */
  "project": "project",

  /**
   * value: "projectRole"
   * @const
   */
  "projectRole": "projectRole",

  /**
   * value: "global"
   * @const
   */
  "global": "global",

  /**
   * value: "loggedin"
   * @const
   */
  "loggedin": "loggedin",

  /**
   * value: "authenticated"
   * @const
   */
  "authenticated": "authenticated",

  /**
   * value: "project-unknown"
   * @const
   */
  "project-unknown": "project-unknown"
};
var _default = SharePermission;
exports["default"] = _default;