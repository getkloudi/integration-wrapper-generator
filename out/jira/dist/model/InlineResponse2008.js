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
 * The InlineResponse2008 model module.
 * @module model/InlineResponse2008
 * @version 1.2.0
 */
var InlineResponse2008 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse2008</code>.
   * 
   * @alias module:model/InlineResponse2008
   * @param system {Array.<module:model/InlineResponse2008System>} 
   */
  function InlineResponse2008(system) {
    _classCallCheck(this, InlineResponse2008);

    InlineResponse2008.initialize(this, system);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse2008, null, [{
    key: "initialize",
    value: function initialize(obj, system) {
      obj['system'] = system;
    }
    /**
     * Constructs a <code>InlineResponse2008</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2008} obj Optional instance to populate.
     * @return {module:model/InlineResponse2008} The populated <code>InlineResponse2008</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse2008();

        if (data.hasOwnProperty('system')) {
          obj['system'] = _ApiClient["default"].convertToType(data['system'], [_InlineResponse2008System["default"]]);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse2008;
}();
/**
 * @member {Array.<module:model/InlineResponse2008System>} system
 */


InlineResponse2008.prototype['system'] = undefined;
var _default = InlineResponse2008;
exports["default"] = _default;