"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse2008System = _interopRequireDefault(require("./InlineResponse2008System"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse20072 model module.
 * @module model/InlineResponse20072
 * @version 1.1.0
 */
var InlineResponse20072 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20072</code>.
   * 
   * @alias module:model/InlineResponse20072
   * @param custom {Array.<module:model/InlineResponse2008System>} 
   * @param system {Array.<module:model/InlineResponse2008System>} 
   */
  function InlineResponse20072(custom, system) {
    _classCallCheck(this, InlineResponse20072);

    InlineResponse20072.initialize(this, custom, system);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20072, null, [{
    key: "initialize",
    value: function initialize(obj, custom, system) {
      obj['custom'] = custom;
      obj['system'] = system;
    }
    /**
     * Constructs a <code>InlineResponse20072</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20072} obj Optional instance to populate.
     * @return {module:model/InlineResponse20072} The populated <code>InlineResponse20072</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20072();

        if (data.hasOwnProperty('custom')) {
          obj['custom'] = _ApiClient["default"].convertToType(data['custom'], [_InlineResponse2008System["default"]]);
        }

        if (data.hasOwnProperty('system')) {
          obj['system'] = _ApiClient["default"].convertToType(data['system'], [_InlineResponse2008System["default"]]);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20072;
}();
/**
 * @member {Array.<module:model/InlineResponse2008System>} custom
 */


InlineResponse20072.prototype['custom'] = undefined;
/**
 * @member {Array.<module:model/InlineResponse2008System>} system
 */

InlineResponse20072.prototype['system'] = undefined;
var _default = InlineResponse20072;
exports["default"] = _default;