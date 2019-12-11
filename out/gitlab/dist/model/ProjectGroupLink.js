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
 * The ProjectGroupLink model module.
 * @module model/ProjectGroupLink
 * @version 1.1.0
 */
var ProjectGroupLink =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ProjectGroupLink</code>.
   * Share the project with a group
   * @alias module:model/ProjectGroupLink
   */
  function ProjectGroupLink() {
    _classCallCheck(this, ProjectGroupLink);

    ProjectGroupLink.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ProjectGroupLink, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ProjectGroupLink</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectGroupLink} obj Optional instance to populate.
     * @return {module:model/ProjectGroupLink} The populated <code>ProjectGroupLink</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProjectGroupLink();

        if (data.hasOwnProperty('expires_at')) {
          obj['expires_at'] = _ApiClient["default"].convertToType(data['expires_at'], 'String');
        }

        if (data.hasOwnProperty('group_access')) {
          obj['group_access'] = _ApiClient["default"].convertToType(data['group_access'], 'String');
        }

        if (data.hasOwnProperty('group_id')) {
          obj['group_id'] = _ApiClient["default"].convertToType(data['group_id'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('project_id')) {
          obj['project_id'] = _ApiClient["default"].convertToType(data['project_id'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ProjectGroupLink;
}();
/**
 * @member {String} expires_at
 */


ProjectGroupLink.prototype['expires_at'] = undefined;
/**
 * @member {String} group_access
 */

ProjectGroupLink.prototype['group_access'] = undefined;
/**
 * @member {String} group_id
 */

ProjectGroupLink.prototype['group_id'] = undefined;
/**
 * @member {String} id
 */

ProjectGroupLink.prototype['id'] = undefined;
/**
 * @member {String} project_id
 */

ProjectGroupLink.prototype['project_id'] = undefined;
var _default = ProjectGroupLink;
exports["default"] = _default;