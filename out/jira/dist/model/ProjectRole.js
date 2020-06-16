"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RoleActor = _interopRequireDefault(require("./RoleActor"));

var _Scope = _interopRequireDefault(require("./Scope"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ProjectRole model module.
 * @module model/ProjectRole
 * @version 1.4.0
 */
var ProjectRole = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ProjectRole</code>.
   * Details about the roles in a project.
   * @alias module:model/ProjectRole
   */
  function ProjectRole() {
    _classCallCheck(this, ProjectRole);

    ProjectRole.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ProjectRole, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ProjectRole</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectRole} obj Optional instance to populate.
     * @return {module:model/ProjectRole} The populated <code>ProjectRole</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProjectRole();

        if (data.hasOwnProperty('actors')) {
          obj['actors'] = _ApiClient["default"].convertToType(data['actors'], [_RoleActor["default"]]);
        }

        if (data.hasOwnProperty('admin')) {
          obj['admin'] = _ApiClient["default"].convertToType(data['admin'], 'Boolean');
        }

        if (data.hasOwnProperty('currentUserRole')) {
          obj['currentUserRole'] = _ApiClient["default"].convertToType(data['currentUserRole'], 'Boolean');
        }

        if (data.hasOwnProperty('default')) {
          obj['default'] = _ApiClient["default"].convertToType(data['default'], 'Boolean');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('roleConfigurable')) {
          obj['roleConfigurable'] = _ApiClient["default"].convertToType(data['roleConfigurable'], 'Boolean');
        }

        if (data.hasOwnProperty('scope')) {
          obj['scope'] = _ApiClient["default"].convertToType(data['scope'], _Scope["default"]);
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _ApiClient["default"].convertToType(data['self'], 'String');
        }

        if (data.hasOwnProperty('translatedName')) {
          obj['translatedName'] = _ApiClient["default"].convertToType(data['translatedName'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ProjectRole;
}();
/**
 * The list of users who act in this role.
 * @member {Array.<module:model/RoleActor>} actors
 */


ProjectRole.prototype['actors'] = undefined;
/**
 * Whether this role is the admin role for the project.
 * @member {Boolean} admin
 */

ProjectRole.prototype['admin'] = undefined;
/**
 * Whether the calling user is part of this role.
 * @member {Boolean} currentUserRole
 */

ProjectRole.prototype['currentUserRole'] = undefined;
/**
 * Whether this role is the default role for the project
 * @member {Boolean} default
 */

ProjectRole.prototype['default'] = undefined;
/**
 * The description of the project role.
 * @member {String} description
 */

ProjectRole.prototype['description'] = undefined;
/**
 * The ID of the project role.
 * @member {Number} id
 */

ProjectRole.prototype['id'] = undefined;
/**
 * The name of the project role.
 * @member {String} name
 */

ProjectRole.prototype['name'] = undefined;
/**
 * Whether the roles are configurable for this project.
 * @member {Boolean} roleConfigurable
 */

ProjectRole.prototype['roleConfigurable'] = undefined;
/**
 * The scope of the role. Indicated for roles associated with [next-gen projects](https://confluence.atlassian.com/x/loMyO).
 * @member {module:model/Scope} scope
 */

ProjectRole.prototype['scope'] = undefined;
/**
 * The URL the project role details.
 * @member {String} self
 */

ProjectRole.prototype['self'] = undefined;
/**
 * The translated name of the project role.
 * @member {String} translatedName
 */

ProjectRole.prototype['translatedName'] = undefined;
var _default = ProjectRole;
exports["default"] = _default;