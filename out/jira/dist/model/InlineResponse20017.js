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
 * The InlineResponse20017 model module.
 * @module model/InlineResponse20017
 * @version 1.3.1
 */
var InlineResponse20017 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20017</code>.
   * 
   * @alias module:model/InlineResponse20017
   * @param self {String} 
   * @param value {String} 
   */
  function InlineResponse20017(self, value) {
    _classCallCheck(this, InlineResponse20017);

    InlineResponse20017.initialize(this, self, value);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20017, null, [{
    key: "initialize",
    value: function initialize(obj, self, value) {
      obj['self'] = self;
      obj['value'] = value;
    }
    /**
     * Constructs a <code>InlineResponse20017</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20017} obj Optional instance to populate.
     * @return {module:model/InlineResponse20017} The populated <code>InlineResponse20017</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20017();

        if (data.hasOwnProperty('self')) {
          obj['self'] = _ApiClient["default"].convertToType(data['self'], 'String');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20017;
}();
/**
 * @member {String} self
 */


InlineResponse20017.prototype['self'] = undefined;
/**
 * @member {String} value
 */

InlineResponse20017.prototype['value'] = undefined;
var _default = InlineResponse20017;
exports["default"] = _default;