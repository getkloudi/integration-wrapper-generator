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
 * The SharePermissionInputBean model module.
 * @module model/SharePermissionInputBean
 * @version 1.4.0
 */
var SharePermissionInputBean = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SharePermissionInputBean</code>.
   * @alias module:model/SharePermissionInputBean
   * @param type {module:model/SharePermissionInputBean.TypeEnum} The type of the share permission.Specify the type as follows:   *  `group` Share with a group. Specify `groupname` as well.  *  `project` Share with a project. Specify `projectId` as well.  *  `projectRole` Share with a project role in a project. Specify `projectId` and `projectRoleId` as well.  *  `global` Share globally, including anonymous users. If set, this type overrides all existing share permissions and must be deleted before any non-global share permissions is set.  *  `authenticated` Share with all logged-in users. This shows as `loggedin` in the response. If set, this type overrides all existing share permissions and must be deleted before any non-global share permissions is set.
   */
  function SharePermissionInputBean(type) {
    _classCallCheck(this, SharePermissionInputBean);

    SharePermissionInputBean.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SharePermissionInputBean, null, [{
    key: "initialize",
    value: function initialize(obj, type) {
      obj['type'] = type;
    }
    /**
     * Constructs a <code>SharePermissionInputBean</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SharePermissionInputBean} obj Optional instance to populate.
     * @return {module:model/SharePermissionInputBean} The populated <code>SharePermissionInputBean</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SharePermissionInputBean();

        if (data.hasOwnProperty('groupname')) {
          obj['groupname'] = _ApiClient["default"].convertToType(data['groupname'], 'String');
        }

        if (data.hasOwnProperty('projectId')) {
          obj['projectId'] = _ApiClient["default"].convertToType(data['projectId'], 'String');
        }

        if (data.hasOwnProperty('projectRoleId')) {
          obj['projectRoleId'] = _ApiClient["default"].convertToType(data['projectRoleId'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return SharePermissionInputBean;
}();
/**
 * The name of the group to share the filter with. Set `type` to `group`.
 * @member {String} groupname
 */


SharePermissionInputBean.prototype['groupname'] = undefined;
/**
 * The ID of the project to share the filter with. Set `type` to `project`.
 * @member {String} projectId
 */

SharePermissionInputBean.prototype['projectId'] = undefined;
/**
 * The ID of the project role to share the filter with. Set `type` to `projectRole` and the `projectId` for the project that the role is in.
 * @member {String} projectRoleId
 */

SharePermissionInputBean.prototype['projectRoleId'] = undefined;
/**
 * The type of the share permission.Specify the type as follows:   *  `group` Share with a group. Specify `groupname` as well.  *  `project` Share with a project. Specify `projectId` as well.  *  `projectRole` Share with a project role in a project. Specify `projectId` and `projectRoleId` as well.  *  `global` Share globally, including anonymous users. If set, this type overrides all existing share permissions and must be deleted before any non-global share permissions is set.  *  `authenticated` Share with all logged-in users. This shows as `loggedin` in the response. If set, this type overrides all existing share permissions and must be deleted before any non-global share permissions is set.
 * @member {module:model/SharePermissionInputBean.TypeEnum} type
 */

SharePermissionInputBean.prototype['type'] = undefined;
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

SharePermissionInputBean['TypeEnum'] = {
  /**
   * value: "project"
   * @const
   */
  "project": "project",

  /**
   * value: "group"
   * @const
   */
  "group": "group",

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
   * value: "authenticated"
   * @const
   */
  "authenticated": "authenticated"
};
var _default = SharePermissionInputBean;
exports["default"] = _default;