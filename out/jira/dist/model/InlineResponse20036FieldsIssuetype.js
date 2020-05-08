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
 * The InlineResponse20036FieldsIssuetype model module.
 * @module model/InlineResponse20036FieldsIssuetype
 * @version 1.1.0
 */
var InlineResponse20036FieldsIssuetype = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20036FieldsIssuetype</code>.
   * @alias module:model/InlineResponse20036FieldsIssuetype
   * @param hasDefaultValue {Boolean} 
   * @param key {String} 
   * @param name {String} 
   * @param operations {Array.<Object>} 
   * @param required {Boolean} 
   */
  function InlineResponse20036FieldsIssuetype(hasDefaultValue, key, name, operations, required) {
    _classCallCheck(this, InlineResponse20036FieldsIssuetype);

    InlineResponse20036FieldsIssuetype.initialize(this, hasDefaultValue, key, name, operations, required);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20036FieldsIssuetype, null, [{
    key: "initialize",
    value: function initialize(obj, hasDefaultValue, key, name, operations, required) {
      obj['hasDefaultValue'] = hasDefaultValue;
      obj['key'] = key;
      obj['name'] = name;
      obj['operations'] = operations;
      obj['required'] = required;
    }
    /**
     * Constructs a <code>InlineResponse20036FieldsIssuetype</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20036FieldsIssuetype} obj Optional instance to populate.
     * @return {module:model/InlineResponse20036FieldsIssuetype} The populated <code>InlineResponse20036FieldsIssuetype</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20036FieldsIssuetype();

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
      }

      return obj;
    }
  }]);

  return InlineResponse20036FieldsIssuetype;
}();
/**
 * @member {Boolean} hasDefaultValue
 */


InlineResponse20036FieldsIssuetype.prototype['hasDefaultValue'] = undefined;
/**
 * @member {String} key
 */

InlineResponse20036FieldsIssuetype.prototype['key'] = undefined;
/**
 * @member {String} name
 */

InlineResponse20036FieldsIssuetype.prototype['name'] = undefined;
/**
 * @member {Array.<Object>} operations
 */

InlineResponse20036FieldsIssuetype.prototype['operations'] = undefined;
/**
 * @member {Boolean} required
 */

InlineResponse20036FieldsIssuetype.prototype['required'] = undefined;
var _default = InlineResponse20036FieldsIssuetype;
exports["default"] = _default;