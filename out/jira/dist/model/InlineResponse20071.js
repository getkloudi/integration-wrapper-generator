"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FilterIdPermissionProjectProjectCategory = _interopRequireDefault(require("./FilterIdPermissionProjectProjectCategory"));

var _InlineResponse2004Author = _interopRequireDefault(require("./InlineResponse2004Author"));

var _InlineResponse2004AuthorAvatarUrls = _interopRequireDefault(require("./InlineResponse2004AuthorAvatarUrls"));

var _InlineResponse20071Components = _interopRequireDefault(require("./InlineResponse20071Components"));

var _InlineResponse20071IssueTypes = _interopRequireDefault(require("./InlineResponse20071IssueTypes"));

var _InlineResponse20071Roles = _interopRequireDefault(require("./InlineResponse20071Roles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse20071 model module.
 * @module model/InlineResponse20071
 * @version 1.3.1
 */
var InlineResponse20071 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20071</code>.
   * 
   * @alias module:model/InlineResponse20071
   * @param assigneeType {String} 
   * @param avatarUrls {module:model/InlineResponse2004AuthorAvatarUrls} 
   * @param components {Array.<module:model/InlineResponse20071Components>} 
   * @param description {String} 
   * @param email {String} 
   * @param id {String} 
   * @param issueTypes {Array.<module:model/InlineResponse20071IssueTypes>} 
   * @param key {String} 
   * @param lead {module:model/InlineResponse2004Author} 
   * @param name {String} 
   * @param projectCategory {module:model/FilterIdPermissionProjectProjectCategory} 
   * @param roles {module:model/InlineResponse20071Roles} 
   * @param self {String} 
   * @param simplified {Boolean} 
   * @param style {String} 
   * @param url {String} 
   * @param versions {Array.<Object>} 
   */
  function InlineResponse20071(assigneeType, avatarUrls, components, description, email, id, issueTypes, key, lead, name, projectCategory, roles, self, simplified, style, url, versions) {
    _classCallCheck(this, InlineResponse20071);

    InlineResponse20071.initialize(this, assigneeType, avatarUrls, components, description, email, id, issueTypes, key, lead, name, projectCategory, roles, self, simplified, style, url, versions);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20071, null, [{
    key: "initialize",
    value: function initialize(obj, assigneeType, avatarUrls, components, description, email, id, issueTypes, key, lead, name, projectCategory, roles, self, simplified, style, url, versions) {
      obj['assigneeType'] = assigneeType;
      obj['avatarUrls'] = avatarUrls;
      obj['components'] = components;
      obj['description'] = description;
      obj['email'] = email;
      obj['id'] = id;
      obj['issueTypes'] = issueTypes;
      obj['key'] = key;
      obj['lead'] = lead;
      obj['name'] = name;
      obj['projectCategory'] = projectCategory;
      obj['roles'] = roles;
      obj['self'] = self;
      obj['simplified'] = simplified;
      obj['style'] = style;
      obj['url'] = url;
      obj['versions'] = versions;
    }
    /**
     * Constructs a <code>InlineResponse20071</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20071} obj Optional instance to populate.
     * @return {module:model/InlineResponse20071} The populated <code>InlineResponse20071</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20071();

        if (data.hasOwnProperty('assigneeType')) {
          obj['assigneeType'] = _ApiClient["default"].convertToType(data['assigneeType'], 'String');
        }

        if (data.hasOwnProperty('avatarUrls')) {
          obj['avatarUrls'] = _InlineResponse2004AuthorAvatarUrls["default"].constructFromObject(data['avatarUrls']);
        }

        if (data.hasOwnProperty('components')) {
          obj['components'] = _ApiClient["default"].convertToType(data['components'], [_InlineResponse20071Components["default"]]);
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('issueTypes')) {
          obj['issueTypes'] = _ApiClient["default"].convertToType(data['issueTypes'], [_InlineResponse20071IssueTypes["default"]]);
        }

        if (data.hasOwnProperty('key')) {
          obj['key'] = _ApiClient["default"].convertToType(data['key'], 'String');
        }

        if (data.hasOwnProperty('lead')) {
          obj['lead'] = _InlineResponse2004Author["default"].constructFromObject(data['lead']);
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('projectCategory')) {
          obj['projectCategory'] = _FilterIdPermissionProjectProjectCategory["default"].constructFromObject(data['projectCategory']);
        }

        if (data.hasOwnProperty('roles')) {
          obj['roles'] = _InlineResponse20071Roles["default"].constructFromObject(data['roles']);
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

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }

        if (data.hasOwnProperty('versions')) {
          obj['versions'] = _ApiClient["default"].convertToType(data['versions'], [Object]);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20071;
}();
/**
 * @member {String} assigneeType
 */


InlineResponse20071.prototype['assigneeType'] = undefined;
/**
 * @member {module:model/InlineResponse2004AuthorAvatarUrls} avatarUrls
 */

InlineResponse20071.prototype['avatarUrls'] = undefined;
/**
 * @member {Array.<module:model/InlineResponse20071Components>} components
 */

InlineResponse20071.prototype['components'] = undefined;
/**
 * @member {String} description
 */

InlineResponse20071.prototype['description'] = undefined;
/**
 * @member {String} email
 */

InlineResponse20071.prototype['email'] = undefined;
/**
 * @member {String} id
 */

InlineResponse20071.prototype['id'] = undefined;
/**
 * @member {Array.<module:model/InlineResponse20071IssueTypes>} issueTypes
 */

InlineResponse20071.prototype['issueTypes'] = undefined;
/**
 * @member {String} key
 */

InlineResponse20071.prototype['key'] = undefined;
/**
 * @member {module:model/InlineResponse2004Author} lead
 */

InlineResponse20071.prototype['lead'] = undefined;
/**
 * @member {String} name
 */

InlineResponse20071.prototype['name'] = undefined;
/**
 * @member {module:model/FilterIdPermissionProjectProjectCategory} projectCategory
 */

InlineResponse20071.prototype['projectCategory'] = undefined;
/**
 * @member {module:model/InlineResponse20071Roles} roles
 */

InlineResponse20071.prototype['roles'] = undefined;
/**
 * @member {String} self
 */

InlineResponse20071.prototype['self'] = undefined;
/**
 * @member {Boolean} simplified
 */

InlineResponse20071.prototype['simplified'] = undefined;
/**
 * @member {String} style
 */

InlineResponse20071.prototype['style'] = undefined;
/**
 * @member {String} url
 */

InlineResponse20071.prototype['url'] = undefined;
/**
 * @member {Array.<Object>} versions
 */

InlineResponse20071.prototype['versions'] = undefined;
var _default = InlineResponse20071;
exports["default"] = _default;