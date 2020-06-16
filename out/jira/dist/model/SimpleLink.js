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
 * The SimpleLink model module.
 * @module model/SimpleLink
 * @version 1.4.0
 */
var SimpleLink = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SimpleLink</code>.
   * Details about the operations available in this version.
   * @alias module:model/SimpleLink
   */
  function SimpleLink() {
    _classCallCheck(this, SimpleLink);

    SimpleLink.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SimpleLink, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SimpleLink</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SimpleLink} obj Optional instance to populate.
     * @return {module:model/SimpleLink} The populated <code>SimpleLink</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SimpleLink();

        if (data.hasOwnProperty('href')) {
          obj['href'] = _ApiClient["default"].convertToType(data['href'], 'String');
        }

        if (data.hasOwnProperty('iconClass')) {
          obj['iconClass'] = _ApiClient["default"].convertToType(data['iconClass'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('label')) {
          obj['label'] = _ApiClient["default"].convertToType(data['label'], 'String');
        }

        if (data.hasOwnProperty('styleClass')) {
          obj['styleClass'] = _ApiClient["default"].convertToType(data['styleClass'], 'String');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('weight')) {
          obj['weight'] = _ApiClient["default"].convertToType(data['weight'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return SimpleLink;
}();
/**
 * @member {String} href
 */


SimpleLink.prototype['href'] = undefined;
/**
 * @member {String} iconClass
 */

SimpleLink.prototype['iconClass'] = undefined;
/**
 * @member {String} id
 */

SimpleLink.prototype['id'] = undefined;
/**
 * @member {String} label
 */

SimpleLink.prototype['label'] = undefined;
/**
 * @member {String} styleClass
 */

SimpleLink.prototype['styleClass'] = undefined;
/**
 * @member {String} title
 */

SimpleLink.prototype['title'] = undefined;
/**
 * @member {Number} weight
 */

SimpleLink.prototype['weight'] = undefined;
var _default = SimpleLink;
exports["default"] = _default;