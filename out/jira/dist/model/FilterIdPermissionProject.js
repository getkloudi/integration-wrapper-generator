"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FilterIdPermissionProjectProjectCategory = _interopRequireDefault(require("./FilterIdPermissionProjectProjectCategory"));

var _InlineResponse2004AuthorAvatarUrls = _interopRequireDefault(require("./InlineResponse2004AuthorAvatarUrls"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The FilterIdPermissionProject model module.
 * @module model/FilterIdPermissionProject
 * @version 1.3.0
 */
var FilterIdPermissionProject = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FilterIdPermissionProject</code>.
   * @alias module:model/FilterIdPermissionProject
   * @param avatarUrls {module:model/InlineResponse2004AuthorAvatarUrls} 
   * @param id {String} 
   * @param key {String} 
   * @param name {String} 
   * @param projectCategory {module:model/FilterIdPermissionProjectProjectCategory} 
   * @param self {String} 
   * @param simplified {Boolean} 
   * @param style {String} 
   */
  function FilterIdPermissionProject(avatarUrls, id, key, name, projectCategory, self, simplified, style) {
    _classCallCheck(this, FilterIdPermissionProject);

    FilterIdPermissionProject.initialize(this, avatarUrls, id, key, name, projectCategory, self, simplified, style);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FilterIdPermissionProject, null, [{
    key: "initialize",
    value: function initialize(obj, avatarUrls, id, key, name, projectCategory, self, simplified, style) {
      obj['avatarUrls'] = avatarUrls;
      obj['id'] = id;
      obj['key'] = key;
      obj['name'] = name;
      obj['projectCategory'] = projectCategory;
      obj['self'] = self;
      obj['simplified'] = simplified;
      obj['style'] = style;
    }
    /**
     * Constructs a <code>FilterIdPermissionProject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FilterIdPermissionProject} obj Optional instance to populate.
     * @return {module:model/FilterIdPermissionProject} The populated <code>FilterIdPermissionProject</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FilterIdPermissionProject();

        if (data.hasOwnProperty('avatarUrls')) {
          obj['avatarUrls'] = _InlineResponse2004AuthorAvatarUrls["default"].constructFromObject(data['avatarUrls']);
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
          obj['projectCategory'] = _FilterIdPermissionProjectProjectCategory["default"].constructFromObject(data['projectCategory']);
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _ApiClient["default"].convertToType(data['self'], 'String');
        }

        if (data.hasOwnProperty('simplified')) {
          obj['simplified'] = _ApiClient["default"].convertToType(data['simplified'], 'Boolean');
        }

        if (data.hasOwnProperty('style')) {
          obj['style'] = _ApiClient["default"].convertToType(data['style'], 'String');
        }
      }

      return obj;
    }
  }]);

  return FilterIdPermissionProject;
}();
/**
 * @member {module:model/InlineResponse2004AuthorAvatarUrls} avatarUrls
 */


FilterIdPermissionProject.prototype['avatarUrls'] = undefined;
/**
 * @member {String} id
 */

FilterIdPermissionProject.prototype['id'] = undefined;
/**
 * @member {String} key
 */

FilterIdPermissionProject.prototype['key'] = undefined;
/**
 * @member {String} name
 */

FilterIdPermissionProject.prototype['name'] = undefined;
/**
 * @member {module:model/FilterIdPermissionProjectProjectCategory} projectCategory
 */

FilterIdPermissionProject.prototype['projectCategory'] = undefined;
/**
 * @member {String} self
 */

FilterIdPermissionProject.prototype['self'] = undefined;
/**
 * @member {Boolean} simplified
 */

FilterIdPermissionProject.prototype['simplified'] = undefined;
/**
 * @member {String} style
 */

FilterIdPermissionProject.prototype['style'] = undefined;
var _default = FilterIdPermissionProject;
exports["default"] = _default;