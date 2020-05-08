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
 * The InlineResponse20041FieldsSummarySchema model module.
 * @module model/InlineResponse20041FieldsSummarySchema
 * @version 1.2.0
 */
var InlineResponse20041FieldsSummarySchema = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20041FieldsSummarySchema</code>.
   * @alias module:model/InlineResponse20041FieldsSummarySchema
   * @param custom {String} 
   * @param customId {Number} 
   * @param items {String} 
   * @param type {String} 
   */
  function InlineResponse20041FieldsSummarySchema(custom, customId, items, type) {
    _classCallCheck(this, InlineResponse20041FieldsSummarySchema);

    InlineResponse20041FieldsSummarySchema.initialize(this, custom, customId, items, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20041FieldsSummarySchema, null, [{
    key: "initialize",
    value: function initialize(obj, custom, customId, items, type) {
      obj['custom'] = custom;
      obj['customId'] = customId;
      obj['items'] = items;
      obj['type'] = type;
    }
    /**
     * Constructs a <code>InlineResponse20041FieldsSummarySchema</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20041FieldsSummarySchema} obj Optional instance to populate.
     * @return {module:model/InlineResponse20041FieldsSummarySchema} The populated <code>InlineResponse20041FieldsSummarySchema</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20041FieldsSummarySchema();

        if (data.hasOwnProperty('custom')) {
          obj['custom'] = _ApiClient["default"].convertToType(data['custom'], 'String');
        }

        if (data.hasOwnProperty('customId')) {
          obj['customId'] = _ApiClient["default"].convertToType(data['customId'], 'Number');
        }

        if (data.hasOwnProperty('items')) {
          obj['items'] = _ApiClient["default"].convertToType(data['items'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20041FieldsSummarySchema;
}();
/**
 * @member {String} custom
 */


InlineResponse20041FieldsSummarySchema.prototype['custom'] = undefined;
/**
 * @member {Number} customId
 */

InlineResponse20041FieldsSummarySchema.prototype['customId'] = undefined;
/**
 * @member {String} items
 */

InlineResponse20041FieldsSummarySchema.prototype['items'] = undefined;
/**
 * @member {String} type
 */

InlineResponse20041FieldsSummarySchema.prototype['type'] = undefined;
var _default = InlineResponse20041FieldsSummarySchema;
exports["default"] = _default;