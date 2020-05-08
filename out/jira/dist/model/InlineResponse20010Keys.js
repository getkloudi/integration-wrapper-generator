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
 * The InlineResponse20010Keys model module.
 * @module model/InlineResponse20010Keys
 * @version 1.3.1
 */
var InlineResponse20010Keys = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20010Keys</code>.
   * @alias module:model/InlineResponse20010Keys
   * @param key {String} 
   * @param self {String} 
   */
  function InlineResponse20010Keys(key, self) {
    _classCallCheck(this, InlineResponse20010Keys);

    InlineResponse20010Keys.initialize(this, key, self);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20010Keys, null, [{
    key: "initialize",
    value: function initialize(obj, key, self) {
      obj['key'] = key;
      obj['self'] = self;
    }
    /**
     * Constructs a <code>InlineResponse20010Keys</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20010Keys} obj Optional instance to populate.
     * @return {module:model/InlineResponse20010Keys} The populated <code>InlineResponse20010Keys</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20010Keys();

        if (data.hasOwnProperty('key')) {
          obj['key'] = _ApiClient["default"].convertToType(data['key'], 'String');
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _ApiClient["default"].convertToType(data['self'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20010Keys;
}();
/**
 * @member {String} key
 */


InlineResponse20010Keys.prototype['key'] = undefined;
/**
 * @member {String} self
 */

InlineResponse20010Keys.prototype['self'] = undefined;
var _default = InlineResponse20010Keys;
exports["default"] = _default;