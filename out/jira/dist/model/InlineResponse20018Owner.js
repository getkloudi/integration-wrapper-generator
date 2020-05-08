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
 * The InlineResponse20018Owner model module.
 * @module model/InlineResponse20018Owner
 * @version 1.0.0
 */
var InlineResponse20018Owner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20018Owner</code>.
   * @alias module:model/InlineResponse20018Owner
   * @param avatarUrls {module:model/InlineResponse2004AuthorAvatarUrls} 
   * @param displayName {String} 
   * @param key {String} 
   * @param name {String} 
   * @param self {String} 
   */
  function InlineResponse20018Owner(avatarUrls, displayName, key, name, self) {
    _classCallCheck(this, InlineResponse20018Owner);

    InlineResponse20018Owner.initialize(this, avatarUrls, displayName, key, name, self);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20018Owner, null, [{
    key: "initialize",
    value: function initialize(obj, avatarUrls, displayName, key, name, self) {
      obj['avatarUrls'] = avatarUrls;
      obj['displayName'] = displayName;
      obj['key'] = key;
      obj['name'] = name;
      obj['self'] = self;
    }
    /**
     * Constructs a <code>InlineResponse20018Owner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20018Owner} obj Optional instance to populate.
     * @return {module:model/InlineResponse20018Owner} The populated <code>InlineResponse20018Owner</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20018Owner();

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

  return InlineResponse20018Owner;
}();
/**
 * @member {module:model/InlineResponse2004AuthorAvatarUrls} avatarUrls
 */


InlineResponse20018Owner.prototype['avatarUrls'] = undefined;
/**
 * @member {String} displayName
 */

InlineResponse20018Owner.prototype['displayName'] = undefined;
/**
 * @member {String} key
 */

InlineResponse20018Owner.prototype['key'] = undefined;
/**
 * @member {String} name
 */

InlineResponse20018Owner.prototype['name'] = undefined;
/**
 * @member {String} self
 */

InlineResponse20018Owner.prototype['self'] = undefined;
var _default = InlineResponse20018Owner;
exports["default"] = _default;