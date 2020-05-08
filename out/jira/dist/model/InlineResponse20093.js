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
 * The InlineResponse20093 model module.
 * @module model/InlineResponse20093
 * @version 1.2.0
 */
var InlineResponse20093 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20093</code>.
   * 
   * @alias module:model/InlineResponse20093
   * @param name {String} 
   * @param self {String} 
   */
  function InlineResponse20093(name, self) {
    _classCallCheck(this, InlineResponse20093);

    InlineResponse20093.initialize(this, name, self);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20093, null, [{
    key: "initialize",
    value: function initialize(obj, name, self) {
      obj['name'] = name;
      obj['self'] = self;
    }
    /**
     * Constructs a <code>InlineResponse20093</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20093} obj Optional instance to populate.
     * @return {module:model/InlineResponse20093} The populated <code>InlineResponse20093</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20093();

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

  return InlineResponse20093;
}();
/**
 * @member {String} name
 */


InlineResponse20093.prototype['name'] = undefined;
/**
 * @member {String} self
 */

InlineResponse20093.prototype['self'] = undefined;
var _default = InlineResponse20093;
exports["default"] = _default;