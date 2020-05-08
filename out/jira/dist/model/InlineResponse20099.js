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
 * The InlineResponse20099 model module.
 * @module model/InlineResponse20099
 * @version 1.3.0
 */
var InlineResponse20099 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20099</code>.
   * 
   * @alias module:model/InlineResponse20099
   * @param link {module:model/InlineResponse20095Link} 
   * @param name {String} 
   * @param self {String} 
   */
  function InlineResponse20099(link, name, self) {
    _classCallCheck(this, InlineResponse20099);

    InlineResponse20099.initialize(this, link, name, self);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20099, null, [{
    key: "initialize",
    value: function initialize(obj, link, name, self) {
      obj['link'] = link;
      obj['name'] = name;
      obj['self'] = self;
    }
    /**
     * Constructs a <code>InlineResponse20099</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20099} obj Optional instance to populate.
     * @return {module:model/InlineResponse20099} The populated <code>InlineResponse20099</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20099();

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

  return InlineResponse20099;
}();
/**
 * @member {module:model/InlineResponse20095Link} link
 */


InlineResponse20099.prototype['link'] = undefined;
/**
 * @member {String} name
 */

InlineResponse20099.prototype['name'] = undefined;
/**
 * @member {String} self
 */

InlineResponse20099.prototype['self'] = undefined;
var _default = InlineResponse20099;
exports["default"] = _default;