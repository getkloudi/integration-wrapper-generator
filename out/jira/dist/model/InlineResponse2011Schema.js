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
 * The InlineResponse2011Schema model module.
 * @module model/InlineResponse2011Schema
 * @version 1.1.0
 */
var InlineResponse2011Schema = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse2011Schema</code>.
   * @alias module:model/InlineResponse2011Schema
   * @param custom {String} 
   * @param customId {Number} 
   * @param type {String} 
   */
  function InlineResponse2011Schema(custom, customId, type) {
    _classCallCheck(this, InlineResponse2011Schema);

    InlineResponse2011Schema.initialize(this, custom, customId, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse2011Schema, null, [{
    key: "initialize",
    value: function initialize(obj, custom, customId, type) {
      obj['custom'] = custom;
      obj['customId'] = customId;
      obj['type'] = type;
    }
    /**
     * Constructs a <code>InlineResponse2011Schema</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2011Schema} obj Optional instance to populate.
     * @return {module:model/InlineResponse2011Schema} The populated <code>InlineResponse2011Schema</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse2011Schema();

        if (data.hasOwnProperty('custom')) {
          obj['custom'] = _ApiClient["default"].convertToType(data['custom'], 'String');
        }

        if (data.hasOwnProperty('customId')) {
          obj['customId'] = _ApiClient["default"].convertToType(data['customId'], 'Number');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse2011Schema;
}();
/**
 * @member {String} custom
 */


InlineResponse2011Schema.prototype['custom'] = undefined;
/**
 * @member {Number} customId
 */

InlineResponse2011Schema.prototype['customId'] = undefined;
/**
 * @member {String} type
 */

InlineResponse2011Schema.prototype['type'] = undefined;
var _default = InlineResponse2011Schema;
exports["default"] = _default;