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
 * The InlineResponse20045ToStatusCategory model module.
 * @module model/InlineResponse20045ToStatusCategory
 * @version 1.2.0
 */
var InlineResponse20045ToStatusCategory = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20045ToStatusCategory</code>.
   * @alias module:model/InlineResponse20045ToStatusCategory
   * @param colorName {String} 
   * @param id {Number} 
   * @param key {String} 
   * @param name {String} 
   * @param self {String} 
   */
  function InlineResponse20045ToStatusCategory(colorName, id, key, name, self) {
    _classCallCheck(this, InlineResponse20045ToStatusCategory);

    InlineResponse20045ToStatusCategory.initialize(this, colorName, id, key, name, self);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20045ToStatusCategory, null, [{
    key: "initialize",
    value: function initialize(obj, colorName, id, key, name, self) {
      obj['colorName'] = colorName;
      obj['id'] = id;
      obj['key'] = key;
      obj['name'] = name;
      obj['self'] = self;
    }
    /**
     * Constructs a <code>InlineResponse20045ToStatusCategory</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20045ToStatusCategory} obj Optional instance to populate.
     * @return {module:model/InlineResponse20045ToStatusCategory} The populated <code>InlineResponse20045ToStatusCategory</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20045ToStatusCategory();

        if (data.hasOwnProperty('colorName')) {
          obj['colorName'] = _ApiClient["default"].convertToType(data['colorName'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
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

  return InlineResponse20045ToStatusCategory;
}();
/**
 * @member {String} colorName
 */


InlineResponse20045ToStatusCategory.prototype['colorName'] = undefined;
/**
 * @member {Number} id
 */

InlineResponse20045ToStatusCategory.prototype['id'] = undefined;
/**
 * @member {String} key
 */

InlineResponse20045ToStatusCategory.prototype['key'] = undefined;
/**
 * @member {String} name
 */

InlineResponse20045ToStatusCategory.prototype['name'] = undefined;
/**
 * @member {String} self
 */

InlineResponse20045ToStatusCategory.prototype['self'] = undefined;
var _default = InlineResponse20045ToStatusCategory;
exports["default"] = _default;