"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse20111 model module.
 * @module model/InlineResponse20111
 * @version 1.3.0
 */
var InlineResponse20111 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20111</code>.
   * 
   * @alias module:model/InlineResponse20111
   * @param id {String} 
   * @param isDeletable {Boolean} 
   * @param isSelected {Boolean} 
   * @param isSystemAvatar {Boolean} 
   */
  function InlineResponse20111(id, isDeletable, isSelected, isSystemAvatar) {
    _classCallCheck(this, InlineResponse20111);

    InlineResponse20111.initialize(this, id, isDeletable, isSelected, isSystemAvatar);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20111, null, [{
    key: "initialize",
    value: function initialize(obj, id, isDeletable, isSelected, isSystemAvatar) {
      obj['id'] = id;
      obj['isDeletable'] = isDeletable;
      obj['isSelected'] = isSelected;
      obj['isSystemAvatar'] = isSystemAvatar;
    }
    /**
     * Constructs a <code>InlineResponse20111</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20111} obj Optional instance to populate.
     * @return {module:model/InlineResponse20111} The populated <code>InlineResponse20111</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20111();

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
      }

      return obj;
    }
  }]);

  return InlineResponse20111;
}();
/**
 * @member {String} id
 */


InlineResponse20111.prototype['id'] = undefined;
/**
 * @member {Boolean} isDeletable
 */

InlineResponse20111.prototype['isDeletable'] = undefined;
/**
 * @member {Boolean} isSelected
 */

InlineResponse20111.prototype['isSelected'] = undefined;
/**
 * @member {Boolean} isSystemAvatar
 */

InlineResponse20111.prototype['isSystemAvatar'] = undefined;
var _default = InlineResponse20111;
exports["default"] = _default;