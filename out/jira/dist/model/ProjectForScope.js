"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AvatarUrlsBean = _interopRequireDefault(require("./AvatarUrlsBean"));

var _UpdatedProjectCategory = _interopRequireDefault(require("./UpdatedProjectCategory"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ProjectForScope model module.
 * @module model/ProjectForScope
 * @version 1.4.0
 */
var ProjectForScope = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ProjectForScope</code>.
   * Details about a next-gen project.
   * @alias module:model/ProjectForScope
   */
  function ProjectForScope() {
    _classCallCheck(this, ProjectForScope);

    ProjectForScope.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ProjectForScope, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ProjectForScope</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectForScope} obj Optional instance to populate.
     * @return {module:model/ProjectForScope} The populated <code>ProjectForScope</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProjectForScope();

        if (data.hasOwnProperty('avatarUrls')) {
          obj['avatarUrls'] = _ApiClient["default"].convertToType(data['avatarUrls'], _AvatarUrlsBean["default"]);
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('key')) {
          obj['key'] = _ApiClient["default"].convertToType(data['key'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('projectCategory')) {
          obj['projectCategory'] = _ApiClient["default"].convertToType(data['projectCategory'], _UpdatedProjectCategory["default"]);
        }

        if (data.hasOwnProperty('projectTypeKey')) {
          obj['projectTypeKey'] = _ApiClient["default"].convertToType(data['projectTypeKey'], 'String');
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _ApiClient["default"].convertToType(data['self'], 'String');
        }

        if (data.hasOwnProperty('simplified')) {
          obj['simplified'] = _ApiClient["default"].convertToType(data['simplified'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return ProjectForScope;
}();
/**
 * The URLs of the project's avatars.
 * @member {module:model/AvatarUrlsBean} avatarUrls
 */


ProjectForScope.prototype['avatarUrls'] = undefined;
/**
 * The ID of the project.
 * @member {String} id
 */

ProjectForScope.prototype['id'] = undefined;
/**
 * The key of the project.
 * @member {String} key
 */

ProjectForScope.prototype['key'] = undefined;
/**
 * The name of the project.
 * @member {String} name
 */

ProjectForScope.prototype['name'] = undefined;
/**
 * The category the project belongs to.
 * @member {module:model/UpdatedProjectCategory} projectCategory
 */

ProjectForScope.prototype['projectCategory'] = undefined;
/**
 * The [project type](https://confluence.atlassian.com/x/GwiiLQ#Jiraapplicationsoverview-Productfeaturesandprojecttypes) of the project.
 * @member {module:model/ProjectForScope.ProjectTypeKeyEnum} projectTypeKey
 */

ProjectForScope.prototype['projectTypeKey'] = undefined;
/**
 * The URL of the project details.
 * @member {String} self
 */

ProjectForScope.prototype['self'] = undefined;
/**
 * Whether or not the project is simplified.
 * @member {Boolean} simplified
 */

ProjectForScope.prototype['simplified'] = undefined;
/**
 * Allowed values for the <code>projectTypeKey</code> property.
 * @enum {String}
 * @readonly
 */

ProjectForScope['ProjectTypeKeyEnum'] = {
  /**
   * value: "software"
   * @const
   */
  "software": "software",

  /**
   * value: "service_desk"
   * @const
   */
  "service_desk": "service_desk",

  /**
   * value: "business"
   * @const
   */
  "business": "business"
};
var _default = ProjectForScope;
exports["default"] = _default;