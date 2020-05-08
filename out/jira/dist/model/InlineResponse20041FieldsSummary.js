"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse20041FieldsSummarySchema = _interopRequireDefault(require("./InlineResponse20041FieldsSummarySchema"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse20041FieldsSummary model module.
 * @module model/InlineResponse20041FieldsSummary
 * @version 1.1.0
 */
var InlineResponse20041FieldsSummary = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20041FieldsSummary</code>.
   * @alias module:model/InlineResponse20041FieldsSummary
   * @param allowedValues {Array.<Object>} 
   * @param defaultValue {String} 
   * @param hasDefaultValue {Boolean} 
   * @param key {String} 
   * @param name {String} 
   * @param operations {Array.<Object>} 
   * @param required {Boolean} 
   * @param schema {module:model/InlineResponse20041FieldsSummarySchema} 
   */
  function InlineResponse20041FieldsSummary(allowedValues, defaultValue, hasDefaultValue, key, name, operations, required, schema) {
    _classCallCheck(this, InlineResponse20041FieldsSummary);

    InlineResponse20041FieldsSummary.initialize(this, allowedValues, defaultValue, hasDefaultValue, key, name, operations, required, schema);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20041FieldsSummary, null, [{
    key: "initialize",
    value: function initialize(obj, allowedValues, defaultValue, hasDefaultValue, key, name, operations, required, schema) {
      obj['allowedValues'] = allowedValues;
      obj['defaultValue'] = defaultValue;
      obj['hasDefaultValue'] = hasDefaultValue;
      obj['key'] = key;
      obj['name'] = name;
      obj['operations'] = operations;
      obj['required'] = required;
      obj['schema'] = schema;
    }
    /**
     * Constructs a <code>InlineResponse20041FieldsSummary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20041FieldsSummary} obj Optional instance to populate.
     * @return {module:model/InlineResponse20041FieldsSummary} The populated <code>InlineResponse20041FieldsSummary</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20041FieldsSummary();

        if (data.hasOwnProperty('allowedValues')) {
          obj['allowedValues'] = _ApiClient["default"].convertToType(data['allowedValues'], [Object]);
        }

        if (data.hasOwnProperty('defaultValue')) {
          obj['defaultValue'] = _ApiClient["default"].convertToType(data['defaultValue'], 'String');
        }

        if (data.hasOwnProperty('hasDefaultValue')) {
          obj['hasDefaultValue'] = _ApiClient["default"].convertToType(data['hasDefaultValue'], 'Boolean');
        }

        if (data.hasOwnProperty('key')) {
          obj['key'] = _ApiClient["default"].convertToType(data['key'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('operations')) {
          obj['operations'] = _ApiClient["default"].convertToType(data['operations'], [Object]);
        }

        if (data.hasOwnProperty('required')) {
          obj['required'] = _ApiClient["default"].convertToType(data['required'], 'Boolean');
        }

        if (data.hasOwnProperty('schema')) {
          obj['schema'] = _InlineResponse20041FieldsSummarySchema["default"].constructFromObject(data['schema']);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20041FieldsSummary;
}();
/**
 * @member {Array.<Object>} allowedValues
 */


InlineResponse20041FieldsSummary.prototype['allowedValues'] = undefined;
/**
 * @member {String} defaultValue
 */

InlineResponse20041FieldsSummary.prototype['defaultValue'] = undefined;
/**
 * @member {Boolean} hasDefaultValue
 */

InlineResponse20041FieldsSummary.prototype['hasDefaultValue'] = undefined;
/**
 * @member {String} key
 */

InlineResponse20041FieldsSummary.prototype['key'] = undefined;
/**
 * @member {String} name
 */

InlineResponse20041FieldsSummary.prototype['name'] = undefined;
/**
 * @member {Array.<Object>} operations
 */

InlineResponse20041FieldsSummary.prototype['operations'] = undefined;
/**
 * @member {Boolean} required
 */

InlineResponse20041FieldsSummary.prototype['required'] = undefined;
/**
 * @member {module:model/InlineResponse20041FieldsSummarySchema} schema
 */

InlineResponse20041FieldsSummary.prototype['schema'] = undefined;
var _default = InlineResponse20041FieldsSummary;
exports["default"] = _default;