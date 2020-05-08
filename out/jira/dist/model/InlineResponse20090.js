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
 * The InlineResponse20090 model module.
 * @module model/InlineResponse20090
 * @version 1.0.0
 */
var InlineResponse20090 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20090</code>.
   * 
   * @alias module:model/InlineResponse20090
   * @param colorName {String} 
   * @param id {Number} 
   * @param key {String} 
   * @param name {String} 
   * @param self {String} 
   */
  function InlineResponse20090(colorName, id, key, name, self) {
    _classCallCheck(this, InlineResponse20090);

    InlineResponse20090.initialize(this, colorName, id, key, name, self);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20090, null, [{
    key: "initialize",
    value: function initialize(obj, colorName, id, key, name, self) {
      obj['colorName'] = colorName;
      obj['id'] = id;
      obj['key'] = key;
      obj['name'] = name;
      obj['self'] = self;
    }
    /**
     * Constructs a <code>InlineResponse20090</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20090} obj Optional instance to populate.
     * @return {module:model/InlineResponse20090} The populated <code>InlineResponse20090</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20090();

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

  return InlineResponse20090;
}();
/**
 * @member {String} colorName
 */


InlineResponse20090.prototype['colorName'] = undefined;
/**
 * @member {Number} id
 */

InlineResponse20090.prototype['id'] = undefined;
/**
 * @member {String} key
 */

InlineResponse20090.prototype['key'] = undefined;
/**
 * @member {String} name
 */

InlineResponse20090.prototype['name'] = undefined;
/**
 * @member {String} self
 */

InlineResponse20090.prototype['self'] = undefined;
var _default = InlineResponse20090;
exports["default"] = _default;