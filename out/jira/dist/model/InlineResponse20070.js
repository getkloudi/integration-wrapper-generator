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
 * The InlineResponse20070 model module.
 * @module model/InlineResponse20070
 * @version 1.1.0
 */
var InlineResponse20070 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20070</code>.
   * 
   * @alias module:model/InlineResponse20070
   * @param color {String} 
   * @param descriptionI18nKey {String} 
   * @param formattedKey {String} 
   * @param icon {String} 
   * @param key {String} 
   */
  function InlineResponse20070(color, descriptionI18nKey, formattedKey, icon, key) {
    _classCallCheck(this, InlineResponse20070);

    InlineResponse20070.initialize(this, color, descriptionI18nKey, formattedKey, icon, key);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20070, null, [{
    key: "initialize",
    value: function initialize(obj, color, descriptionI18nKey, formattedKey, icon, key) {
      obj['color'] = color;
      obj['descriptionI18nKey'] = descriptionI18nKey;
      obj['formattedKey'] = formattedKey;
      obj['icon'] = icon;
      obj['key'] = key;
    }
    /**
     * Constructs a <code>InlineResponse20070</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20070} obj Optional instance to populate.
     * @return {module:model/InlineResponse20070} The populated <code>InlineResponse20070</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20070();

        if (data.hasOwnProperty('color')) {
          obj['color'] = _ApiClient["default"].convertToType(data['color'], 'String');
        }

        if (data.hasOwnProperty('descriptionI18nKey')) {
          obj['descriptionI18nKey'] = _ApiClient["default"].convertToType(data['descriptionI18nKey'], 'String');
        }

        if (data.hasOwnProperty('formattedKey')) {
          obj['formattedKey'] = _ApiClient["default"].convertToType(data['formattedKey'], 'String');
        }

        if (data.hasOwnProperty('icon')) {
          obj['icon'] = _ApiClient["default"].convertToType(data['icon'], 'String');
        }

        if (data.hasOwnProperty('key')) {
          obj['key'] = _ApiClient["default"].convertToType(data['key'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20070;
}();
/**
 * @member {String} color
 */


InlineResponse20070.prototype['color'] = undefined;
/**
 * @member {String} descriptionI18nKey
 */

InlineResponse20070.prototype['descriptionI18nKey'] = undefined;
/**
 * @member {String} formattedKey
 */

InlineResponse20070.prototype['formattedKey'] = undefined;
/**
 * @member {String} icon
 */

InlineResponse20070.prototype['icon'] = undefined;
/**
 * @member {String} key
 */

InlineResponse20070.prototype['key'] = undefined;
var _default = InlineResponse20070;
exports["default"] = _default;