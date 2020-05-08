"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse2004AuthorAvatarUrls = _interopRequireDefault(require("./InlineResponse2004AuthorAvatarUrls"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse2004Author model module.
 * @module model/InlineResponse2004Author
 * @version 1.0.0
 */
var InlineResponse2004Author = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse2004Author</code>.
   * @alias module:model/InlineResponse2004Author
   * @param accountId {String} 
   * @param active {Boolean} 
   * @param avatarUrls {module:model/InlineResponse2004AuthorAvatarUrls} 
   * @param displayName {String} 
   * @param key {String} 
   * @param name {String} 
   * @param self {String} 
   */
  function InlineResponse2004Author(accountId, active, avatarUrls, displayName, key, name, self) {
    _classCallCheck(this, InlineResponse2004Author);

    InlineResponse2004Author.initialize(this, accountId, active, avatarUrls, displayName, key, name, self);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse2004Author, null, [{
    key: "initialize",
    value: function initialize(obj, accountId, active, avatarUrls, displayName, key, name, self) {
      obj['accountId'] = accountId;
      obj['active'] = active;
      obj['avatarUrls'] = avatarUrls;
      obj['displayName'] = displayName;
      obj['key'] = key;
      obj['name'] = name;
      obj['self'] = self;
    }
    /**
     * Constructs a <code>InlineResponse2004Author</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2004Author} obj Optional instance to populate.
     * @return {module:model/InlineResponse2004Author} The populated <code>InlineResponse2004Author</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse2004Author();

        if (data.hasOwnProperty('accountId')) {
          obj['accountId'] = _ApiClient["default"].convertToType(data['accountId'], 'String');
        }

        if (data.hasOwnProperty('active')) {
          obj['active'] = _ApiClient["default"].convertToType(data['active'], 'Boolean');
        }

        if (data.hasOwnProperty('avatarUrls')) {
          obj['avatarUrls'] = _InlineResponse2004AuthorAvatarUrls["default"].constructFromObject(data['avatarUrls']);
        }

        if (data.hasOwnProperty('displayName')) {
          obj['displayName'] = _ApiClient["default"].convertToType(data['displayName'], 'String');
        }

        if (data.hasOwnProperty('key')) {
          obj['key'] = _ApiClient["default"].convertToType(data['key'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _ApiClient["default"].convertToType(data['self'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse2004Author;
}();
/**
 * @member {String} accountId
 */


InlineResponse2004Author.prototype['accountId'] = undefined;
/**
 * @member {Boolean} active
 */

InlineResponse2004Author.prototype['active'] = undefined;
/**
 * @member {module:model/InlineResponse2004AuthorAvatarUrls} avatarUrls
 */

InlineResponse2004Author.prototype['avatarUrls'] = undefined;
/**
 * @member {String} displayName
 */

InlineResponse2004Author.prototype['displayName'] = undefined;
/**
 * @member {String} key
 */

InlineResponse2004Author.prototype['key'] = undefined;
/**
 * @member {String} name
 */

InlineResponse2004Author.prototype['name'] = undefined;
/**
 * @member {String} self
 */

InlineResponse2004Author.prototype['self'] = undefined;
var _default = InlineResponse2004Author;
exports["default"] = _default;