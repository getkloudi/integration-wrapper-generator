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
 * The InlineResponse2008System model module.
 * @module model/InlineResponse2008System
 * @version 1.3.0
 */
var InlineResponse2008System = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse2008System</code>.
   * @alias module:model/InlineResponse2008System
   * @param id {String} 
   * @param isDeletable {Boolean} 
   * @param isSelected {Boolean} 
   * @param isSystemAvatar {Boolean} 
   */
  function InlineResponse2008System(id, isDeletable, isSelected, isSystemAvatar) {
    _classCallCheck(this, InlineResponse2008System);

    InlineResponse2008System.initialize(this, id, isDeletable, isSelected, isSystemAvatar);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse2008System, null, [{
    key: "initialize",
    value: function initialize(obj, id, isDeletable, isSelected, isSystemAvatar) {
      obj['id'] = id;
      obj['isDeletable'] = isDeletable;
      obj['isSelected'] = isSelected;
      obj['isSystemAvatar'] = isSystemAvatar;
    }
    /**
     * Constructs a <code>InlineResponse2008System</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2008System} obj Optional instance to populate.
     * @return {module:model/InlineResponse2008System} The populated <code>InlineResponse2008System</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse2008System();

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

  return InlineResponse2008System;
}();
/**
 * @member {String} id
 */


InlineResponse2008System.prototype['id'] = undefined;
/**
 * @member {Boolean} isDeletable
 */

InlineResponse2008System.prototype['isDeletable'] = undefined;
/**
 * @member {Boolean} isSelected
 */

InlineResponse2008System.prototype['isSelected'] = undefined;
/**
 * @member {Boolean} isSystemAvatar
 */

InlineResponse2008System.prototype['isSystemAvatar'] = undefined;
/**
 * @member {module:model/InlineResponse2004AuthorAvatarUrls} urls
 */

InlineResponse2008System.prototype['urls'] = undefined;
var _default = InlineResponse2008System;
exports["default"] = _default;