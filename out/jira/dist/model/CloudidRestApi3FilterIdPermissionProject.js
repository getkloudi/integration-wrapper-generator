"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CloudidRestApi3FilterIdPermissionProjectProjectCategory = _interopRequireDefault(require("./CloudidRestApi3FilterIdPermissionProjectProjectCategory"));

var _InlineResponse2004AuthorAvatarUrls = _interopRequireDefault(require("./InlineResponse2004AuthorAvatarUrls"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CloudidRestApi3FilterIdPermissionProject model module.
 * @module model/CloudidRestApi3FilterIdPermissionProject
 * @version 1.2.0
 */
var CloudidRestApi3FilterIdPermissionProject = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CloudidRestApi3FilterIdPermissionProject</code>.
   * @alias module:model/CloudidRestApi3FilterIdPermissionProject
   * @param avatarUrls {module:model/InlineResponse2004AuthorAvatarUrls} 
   * @param id {String} 
   * @param key {String} 
   * @param name {String} 
   * @param projectCategory {module:model/CloudidRestApi3FilterIdPermissionProjectProjectCategory} 
   * @param self {String} 
   * @param simplified {Boolean} 
   * @param style {String} 
   */
  function CloudidRestApi3FilterIdPermissionProject(avatarUrls, id, key, name, projectCategory, self, simplified, style) {
    _classCallCheck(this, CloudidRestApi3FilterIdPermissionProject);

    CloudidRestApi3FilterIdPermissionProject.initialize(this, avatarUrls, id, key, name, projectCategory, self, simplified, style);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CloudidRestApi3FilterIdPermissionProject, null, [{
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
     * Constructs a <code>CloudidRestApi3FilterIdPermissionProject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CloudidRestApi3FilterIdPermissionProject} obj Optional instance to populate.
     * @return {module:model/CloudidRestApi3FilterIdPermissionProject} The populated <code>CloudidRestApi3FilterIdPermissionProject</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CloudidRestApi3FilterIdPermissionProject();

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
          obj['projectCategory'] = _CloudidRestApi3FilterIdPermissionProjectProjectCategory["default"].constructFromObject(data['projectCategory']);
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

  return CloudidRestApi3FilterIdPermissionProject;
}();
/**
 * @member {module:model/InlineResponse2004AuthorAvatarUrls} avatarUrls
 */


CloudidRestApi3FilterIdPermissionProject.prototype['avatarUrls'] = undefined;
/**
 * @member {String} id
 */

CloudidRestApi3FilterIdPermissionProject.prototype['id'] = undefined;
/**
 * @member {String} key
 */

CloudidRestApi3FilterIdPermissionProject.prototype['key'] = undefined;
/**
 * @member {String} name
 */

CloudidRestApi3FilterIdPermissionProject.prototype['name'] = undefined;
/**
 * @member {module:model/CloudidRestApi3FilterIdPermissionProjectProjectCategory} projectCategory
 */

CloudidRestApi3FilterIdPermissionProject.prototype['projectCategory'] = undefined;
/**
 * @member {String} self
 */

CloudidRestApi3FilterIdPermissionProject.prototype['self'] = undefined;
/**
 * @member {Boolean} simplified
 */

CloudidRestApi3FilterIdPermissionProject.prototype['simplified'] = undefined;
/**
 * @member {String} style
 */

CloudidRestApi3FilterIdPermissionProject.prototype['style'] = undefined;
var _default = CloudidRestApi3FilterIdPermissionProject;
exports["default"] = _default;