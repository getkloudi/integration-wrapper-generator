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
 * The FilterIdPermissionRoleScopeProject model module.
 * @module model/FilterIdPermissionRoleScopeProject
 * @version 1.0.0
 */
var FilterIdPermissionRoleScopeProject = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FilterIdPermissionRoleScopeProject</code>.
   * @alias module:model/FilterIdPermissionRoleScopeProject
   * @param id {String} 
   */
  function FilterIdPermissionRoleScopeProject(id) {
    _classCallCheck(this, FilterIdPermissionRoleScopeProject);

    FilterIdPermissionRoleScopeProject.initialize(this, id);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FilterIdPermissionRoleScopeProject, null, [{
    key: "initialize",
    value: function initialize(obj, id) {
      obj['id'] = id;
    }
    /**
     * Constructs a <code>FilterIdPermissionRoleScopeProject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FilterIdPermissionRoleScopeProject} obj Optional instance to populate.
     * @return {module:model/FilterIdPermissionRoleScopeProject} The populated <code>FilterIdPermissionRoleScopeProject</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FilterIdPermissionRoleScopeProject();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }
      }

      return obj;
    }
  }]);

  return FilterIdPermissionRoleScopeProject;
}();
/**
 * @member {String} id
 */


FilterIdPermissionRoleScopeProject.prototype['id'] = undefined;
var _default = FilterIdPermissionRoleScopeProject;
exports["default"] = _default;