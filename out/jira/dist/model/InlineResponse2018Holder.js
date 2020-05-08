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
 * The InlineResponse2018Holder model module.
 * @module model/InlineResponse2018Holder
 * @version 1.1.0
 */
var InlineResponse2018Holder = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse2018Holder</code>.
   * @alias module:model/InlineResponse2018Holder
   * @param expand {String} 
   * @param parameter {String} 
   * @param type {String} 
   */
  function InlineResponse2018Holder(expand, parameter, type) {
    _classCallCheck(this, InlineResponse2018Holder);

    InlineResponse2018Holder.initialize(this, expand, parameter, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse2018Holder, null, [{
    key: "initialize",
    value: function initialize(obj, expand, parameter, type) {
      obj['expand'] = expand;
      obj['parameter'] = parameter;
      obj['type'] = type;
    }
    /**
     * Constructs a <code>InlineResponse2018Holder</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2018Holder} obj Optional instance to populate.
     * @return {module:model/InlineResponse2018Holder} The populated <code>InlineResponse2018Holder</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse2018Holder();

        if (data.hasOwnProperty('expand')) {
          obj['expand'] = _ApiClient["default"].convertToType(data['expand'], 'String');
        }

        if (data.hasOwnProperty('parameter')) {
          obj['parameter'] = _ApiClient["default"].convertToType(data['parameter'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse2018Holder;
}();
/**
 * @member {String} expand
 */


InlineResponse2018Holder.prototype['expand'] = undefined;
/**
 * @member {String} parameter
 */

InlineResponse2018Holder.prototype['parameter'] = undefined;
/**
 * @member {String} type
 */

InlineResponse2018Holder.prototype['type'] = undefined;
var _default = InlineResponse2018Holder;
exports["default"] = _default;