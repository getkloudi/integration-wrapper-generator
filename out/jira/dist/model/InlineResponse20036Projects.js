"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse20036Issuetypes = _interopRequireDefault(require("./InlineResponse20036Issuetypes"));

var _InlineResponse2004AuthorAvatarUrls = _interopRequireDefault(require("./InlineResponse2004AuthorAvatarUrls"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse20036Projects model module.
 * @module model/InlineResponse20036Projects
 * @version 1.2.0
 */
var InlineResponse20036Projects = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20036Projects</code>.
   * @alias module:model/InlineResponse20036Projects
   * @param id {String} 
   * @param key {String} 
   * @param name {String} 
   * @param self {String} 
   */
  function InlineResponse20036Projects(id, key, name, self) {
    _classCallCheck(this, InlineResponse20036Projects);

    InlineResponse20036Projects.initialize(this, id, key, name, self);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20036Projects, null, [{
    key: "initialize",
    value: function initialize(obj, id, key, name, self) {
      obj['id'] = id;
      obj['key'] = key;
      obj['name'] = name;
      obj['self'] = self;
    }
    /**
     * Constructs a <code>InlineResponse20036Projects</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20036Projects} obj Optional instance to populate.
     * @return {module:model/InlineResponse20036Projects} The populated <code>InlineResponse20036Projects</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20036Projects();

        if (data.hasOwnProperty('avatarUrls')) {
          obj['avatarUrls'] = _InlineResponse2004AuthorAvatarUrls["default"].constructFromObject(data['avatarUrls']);
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('issuetypes')) {
          obj['issuetypes'] = _ApiClient["default"].convertToType(data['issuetypes'], [_InlineResponse20036Issuetypes["default"]]);
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

  return InlineResponse20036Projects;
}();
/**
 * @member {module:model/InlineResponse2004AuthorAvatarUrls} avatarUrls
 */


InlineResponse20036Projects.prototype['avatarUrls'] = undefined;
/**
 * @member {String} id
 */

InlineResponse20036Projects.prototype['id'] = undefined;
/**
 * @member {Array.<module:model/InlineResponse20036Issuetypes>} issuetypes
 */

InlineResponse20036Projects.prototype['issuetypes'] = undefined;
/**
 * @member {String} key
 */

InlineResponse20036Projects.prototype['key'] = undefined;
/**
 * @member {String} name
 */

InlineResponse20036Projects.prototype['name'] = undefined;
/**
 * @member {String} self
 */

InlineResponse20036Projects.prototype['self'] = undefined;
var _default = InlineResponse20036Projects;
exports["default"] = _default;