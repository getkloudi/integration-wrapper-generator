"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FilterIdPermissionRoleScopeProject = _interopRequireDefault(require("./FilterIdPermissionRoleScopeProject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The FilterIdPermissionRoleScope model module.
 * @module model/FilterIdPermissionRoleScope
 * @version 1.0.0
 */
var FilterIdPermissionRoleScope = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FilterIdPermissionRoleScope</code>.
   * @alias module:model/FilterIdPermissionRoleScope
   * @param project {module:model/FilterIdPermissionRoleScopeProject} 
   * @param type {String} 
   */
  function FilterIdPermissionRoleScope(project, type) {
    _classCallCheck(this, FilterIdPermissionRoleScope);

    FilterIdPermissionRoleScope.initialize(this, project, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FilterIdPermissionRoleScope, null, [{
    key: "initialize",
    value: function initialize(obj, project, type) {
      obj['project'] = project;
      obj['type'] = type;
    }
    /**
     * Constructs a <code>FilterIdPermissionRoleScope</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FilterIdPermissionRoleScope} obj Optional instance to populate.
     * @return {module:model/FilterIdPermissionRoleScope} The populated <code>FilterIdPermissionRoleScope</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FilterIdPermissionRoleScope();

        if (data.hasOwnProperty('project')) {
          obj['project'] = _FilterIdPermissionRoleScopeProject["default"].constructFromObject(data['project']);
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return FilterIdPermissionRoleScope;
}();
/**
 * @member {module:model/FilterIdPermissionRoleScopeProject} project
 */


FilterIdPermissionRoleScope.prototype['project'] = undefined;
/**
 * @member {String} type
 */

FilterIdPermissionRoleScope.prototype['type'] = undefined;
var _default = FilterIdPermissionRoleScope;
exports["default"] = _default;