"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse20095Link = _interopRequireDefault(require("./InlineResponse20095Link"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse20095Links model module.
 * @module model/InlineResponse20095Links
 * @version 1.3.0
 */
var InlineResponse20095Links = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20095Links</code>.
   * @alias module:model/InlineResponse20095Links
   * @param name {String} 
   * @param self {String} 
   */
  function InlineResponse20095Links(name, self) {
    _classCallCheck(this, InlineResponse20095Links);

    InlineResponse20095Links.initialize(this, name, self);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20095Links, null, [{
    key: "initialize",
    value: function initialize(obj, name, self) {
      obj['name'] = name;
      obj['self'] = self;
    }
    /**
     * Constructs a <code>InlineResponse20095Links</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20095Links} obj Optional instance to populate.
     * @return {module:model/InlineResponse20095Links} The populated <code>InlineResponse20095Links</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20095Links();

        if (data.hasOwnProperty('link')) {
          obj['link'] = _InlineResponse20095Link["default"].constructFromObject(data['link']);
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

  return InlineResponse20095Links;
}();
/**
 * @member {module:model/InlineResponse20095Link} link
 */


InlineResponse20095Links.prototype['link'] = undefined;
/**
 * @member {String} name
 */

InlineResponse20095Links.prototype['name'] = undefined;
/**
 * @member {String} self
 */

InlineResponse20095Links.prototype['self'] = undefined;
var _default = InlineResponse20095Links;
exports["default"] = _default;