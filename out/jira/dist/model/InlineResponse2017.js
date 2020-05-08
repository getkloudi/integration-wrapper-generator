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
 * The InlineResponse2017 model module.
 * @module model/InlineResponse2017
 * @version 1.2.0
 */
var InlineResponse2017 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse2017</code>.
   * 
   * @alias module:model/InlineResponse2017
   * @param id {String} 
   * @param isDeletable {Boolean} 
   * @param isSelected {Boolean} 
   * @param isSystemAvatar {Boolean} 
   * @param urls {module:model/InlineResponse2004AuthorAvatarUrls} 
   */
  function InlineResponse2017(id, isDeletable, isSelected, isSystemAvatar, urls) {
    _classCallCheck(this, InlineResponse2017);

    InlineResponse2017.initialize(this, id, isDeletable, isSelected, isSystemAvatar, urls);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse2017, null, [{
    key: "initialize",
    value: function initialize(obj, id, isDeletable, isSelected, isSystemAvatar, urls) {
      obj['id'] = id;
      obj['isDeletable'] = isDeletable;
      obj['isSelected'] = isSelected;
      obj['isSystemAvatar'] = isSystemAvatar;
      obj['urls'] = urls;
    }
    /**
     * Constructs a <code>InlineResponse2017</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2017} obj Optional instance to populate.
     * @return {module:model/InlineResponse2017} The populated <code>InlineResponse2017</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse2017();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('isDeletable')) {
          obj['isDeletable'] = _ApiClient["default"].convertToType(data['isDeletable'], 'Boolean');
        }

        if (data.hasOwnProperty('isSelected')) {
          obj['isSelected'] = _ApiClient["default"].convertToType(data['isSelected'], 'Boolean');
        }

        if (data.hasOwnProperty('isSystemAvatar')) {
          obj['isSystemAvatar'] = _ApiClient["default"].convertToType(data['isSystemAvatar'], 'Boolean');
        }

        if (data.hasOwnProperty('urls')) {
          obj['urls'] = _InlineResponse2004AuthorAvatarUrls["default"].constructFromObject(data['urls']);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse2017;
}();
/**
 * @member {String} id
 */


InlineResponse2017.prototype['id'] = undefined;
/**
 * @member {Boolean} isDeletable
 */

InlineResponse2017.prototype['isDeletable'] = undefined;
/**
 * @member {Boolean} isSelected
 */

InlineResponse2017.prototype['isSelected'] = undefined;
/**
 * @member {Boolean} isSystemAvatar
 */

InlineResponse2017.prototype['isSystemAvatar'] = undefined;
/**
 * @member {module:model/InlineResponse2004AuthorAvatarUrls} urls
 */

InlineResponse2017.prototype['urls'] = undefined;
var _default = InlineResponse2017;
exports["default"] = _default;