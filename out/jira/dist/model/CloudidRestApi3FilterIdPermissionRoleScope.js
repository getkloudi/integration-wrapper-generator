"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CloudidRestApi3FilterIdPermissionRoleScopeProject = _interopRequireDefault(require("./CloudidRestApi3FilterIdPermissionRoleScopeProject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CloudidRestApi3FilterIdPermissionRoleScope model module.
 * @module model/CloudidRestApi3FilterIdPermissionRoleScope
 * @version 1.2.0
 */
var CloudidRestApi3FilterIdPermissionRoleScope = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CloudidRestApi3FilterIdPermissionRoleScope</code>.
   * @alias module:model/CloudidRestApi3FilterIdPermissionRoleScope
   * @param project {module:model/CloudidRestApi3FilterIdPermissionRoleScopeProject} 
   * @param type {String} 
   */
  function CloudidRestApi3FilterIdPermissionRoleScope(project, type) {
    _classCallCheck(this, CloudidRestApi3FilterIdPermissionRoleScope);

    CloudidRestApi3FilterIdPermissionRoleScope.initialize(this, project, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CloudidRestApi3FilterIdPermissionRoleScope, null, [{
    key: "initialize",
    value: function initialize(obj, project, type) {
      obj['project'] = project;
      obj['type'] = type;
    }
    /**
     * Constructs a <code>CloudidRestApi3FilterIdPermissionRoleScope</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CloudidRestApi3FilterIdPermissionRoleScope} obj Optional instance to populate.
     * @return {module:model/CloudidRestApi3FilterIdPermissionRoleScope} The populated <code>CloudidRestApi3FilterIdPermissionRoleScope</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CloudidRestApi3FilterIdPermissionRoleScope();

        if (data.hasOwnProperty('project')) {
          obj['project'] = _CloudidRestApi3FilterIdPermissionRoleScopeProject["default"].constructFromObject(data['project']);
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CloudidRestApi3FilterIdPermissionRoleScope;
}();
/**
 * @member {module:model/CloudidRestApi3FilterIdPermissionRoleScopeProject} project
 */


CloudidRestApi3FilterIdPermissionRoleScope.prototype['project'] = undefined;
/**
 * @member {String} type
 */

CloudidRestApi3FilterIdPermissionRoleScope.prototype['type'] = undefined;
var _default = CloudidRestApi3FilterIdPermissionRoleScope;
exports["default"] = _default;