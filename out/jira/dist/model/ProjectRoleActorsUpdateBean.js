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
 * The ProjectRoleActorsUpdateBean model module.
 * @module model/ProjectRoleActorsUpdateBean
 * @version 1.4.0
 */
var ProjectRoleActorsUpdateBean = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ProjectRoleActorsUpdateBean</code>.
   * @alias module:model/ProjectRoleActorsUpdateBean
   */
  function ProjectRoleActorsUpdateBean() {
    _classCallCheck(this, ProjectRoleActorsUpdateBean);

    ProjectRoleActorsUpdateBean.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ProjectRoleActorsUpdateBean, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ProjectRoleActorsUpdateBean</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectRoleActorsUpdateBean} obj Optional instance to populate.
     * @return {module:model/ProjectRoleActorsUpdateBean} The populated <code>ProjectRoleActorsUpdateBean</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProjectRoleActorsUpdateBean();

        if (data.hasOwnProperty('categorisedActors')) {
          obj['categorisedActors'] = _ApiClient["default"].convertToType(data['categorisedActors'], {
            'String': ['String']
          });
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ProjectRoleActorsUpdateBean;
}();
/**
 * The actors to add to the project role. Add groups using `atlassian-group-role-actor` and a list of group names. For example, `\"atlassian-group-role-actor\":[\"another\",\"administrators\"]}`. Add users using `atlassian-user-role-actor` and a list of account IDs. For example, `\"atlassian-user-role-actor\":[\"12345678-9abc-def1-2345-6789abcdef12\", \"abcdef12-3456-789a-bcde-f123456789ab\"]`.
 * @member {Object.<String, Array.<String>>} categorisedActors
 */


ProjectRoleActorsUpdateBean.prototype['categorisedActors'] = undefined;
/**
 * The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs.
 * @member {Number} id
 */

ProjectRoleActorsUpdateBean.prototype['id'] = undefined;
var _default = ProjectRoleActorsUpdateBean;
exports["default"] = _default;