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
 * The InlineResponse20068Values model module.
 * @module model/InlineResponse20068Values
 * @version 1.1.0
 */
var InlineResponse20068Values = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20068Values</code>.
   * @alias module:model/InlineResponse20068Values
   * @param id {String} 
   * @param key {String} 
   * @param name {String} 
   * @param self {String} 
   * @param simplified {Boolean} 
   * @param style {String} 
   */
  function InlineResponse20068Values(id, key, name, self, simplified, style) {
    _classCallCheck(this, InlineResponse20068Values);

    InlineResponse20068Values.initialize(this, id, key, name, self, simplified, style);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20068Values, null, [{
    key: "initialize",
    value: function initialize(obj, id, key, name, self, simplified, style) {
      obj['id'] = id;
      obj['key'] = key;
      obj['name'] = name;
      obj['self'] = self;
      obj['simplified'] = simplified;
      obj['style'] = style;
    }
    /**
     * Constructs a <code>InlineResponse20068Values</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20068Values} obj Optional instance to populate.
     * @return {module:model/InlineResponse20068Values} The populated <code>InlineResponse20068Values</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20068Values();

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

  return InlineResponse20068Values;
}();
/**
 * @member {module:model/InlineResponse2004AuthorAvatarUrls} avatarUrls
 */


InlineResponse20068Values.prototype['avatarUrls'] = undefined;
/**
 * @member {String} id
 */

InlineResponse20068Values.prototype['id'] = undefined;
/**
 * @member {String} key
 */

InlineResponse20068Values.prototype['key'] = undefined;
/**
 * @member {String} name
 */

InlineResponse20068Values.prototype['name'] = undefined;
/**
 * @member {module:model/CloudidRestApi3FilterIdPermissionProjectProjectCategory} projectCategory
 */

InlineResponse20068Values.prototype['projectCategory'] = undefined;
/**
 * @member {String} self
 */

InlineResponse20068Values.prototype['self'] = undefined;
/**
 * @member {Boolean} simplified
 */

InlineResponse20068Values.prototype['simplified'] = undefined;
/**
 * @member {String} style
 */

InlineResponse20068Values.prototype['style'] = undefined;
var _default = InlineResponse20068Values;
exports["default"] = _default;