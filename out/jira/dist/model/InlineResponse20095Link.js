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
 * The InlineResponse20095Link model module.
 * @module model/InlineResponse20095Link
 * @version 1.1.0
 */
var InlineResponse20095Link = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20095Link</code>.
   * @alias module:model/InlineResponse20095Link
   * @param colors {Array.<Object>} 
   * @param globalId {String} 
   * @param myCustomLinkProperty {Boolean} 
   */
  function InlineResponse20095Link(colors, globalId, myCustomLinkProperty) {
    _classCallCheck(this, InlineResponse20095Link);

    InlineResponse20095Link.initialize(this, colors, globalId, myCustomLinkProperty);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20095Link, null, [{
    key: "initialize",
    value: function initialize(obj, colors, globalId, myCustomLinkProperty) {
      obj['colors'] = colors;
      obj['globalId'] = globalId;
      obj['myCustomLinkProperty'] = myCustomLinkProperty;
    }
    /**
     * Constructs a <code>InlineResponse20095Link</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20095Link} obj Optional instance to populate.
     * @return {module:model/InlineResponse20095Link} The populated <code>InlineResponse20095Link</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20095Link();

        if (data.hasOwnProperty('colors')) {
          obj['colors'] = _ApiClient["default"].convertToType(data['colors'], [Object]);
        }

        if (data.hasOwnProperty('globalId')) {
          obj['globalId'] = _ApiClient["default"].convertToType(data['globalId'], 'String');
        }

        if (data.hasOwnProperty('myCustomLinkProperty')) {
          obj['myCustomLinkProperty'] = _ApiClient["default"].convertToType(data['myCustomLinkProperty'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20095Link;
}();
/**
 * @member {Array.<Object>} colors
 */


InlineResponse20095Link.prototype['colors'] = undefined;
/**
 * @member {String} globalId
 */

InlineResponse20095Link.prototype['globalId'] = undefined;
/**
 * @member {Boolean} myCustomLinkProperty
 */

InlineResponse20095Link.prototype['myCustomLinkProperty'] = undefined;
var _default = InlineResponse20095Link;
exports["default"] = _default;