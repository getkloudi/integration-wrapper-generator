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
 * The ProjectPermissions model module.
 * @module model/ProjectPermissions
 * @version 1.4.0
 */
var ProjectPermissions = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ProjectPermissions</code>.
   * Permissions which a user has on a project.
   * @alias module:model/ProjectPermissions
   */
  function ProjectPermissions() {
    _classCallCheck(this, ProjectPermissions);

    ProjectPermissions.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ProjectPermissions, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ProjectPermissions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectPermissions} obj Optional instance to populate.
     * @return {module:model/ProjectPermissions} The populated <code>ProjectPermissions</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProjectPermissions();

        if (data.hasOwnProperty('canEdit')) {
          obj['canEdit'] = _ApiClient["default"].convertToType(data['canEdit'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return ProjectPermissions;
}();
/**
 * Whether the logged user can edit the project.
 * @member {Boolean} canEdit
 */


ProjectPermissions.prototype['canEdit'] = undefined;
var _default = ProjectPermissions;
exports["default"] = _default;