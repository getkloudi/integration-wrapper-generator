"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _JsonTypeBean = _interopRequireDefault(require("./JsonTypeBean"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The FieldMetadata model module.
 * @module model/FieldMetadata
 * @version 1.4.0
 */
var FieldMetadata = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FieldMetadata</code>.
   * The metadata describing an issue field.
   * @alias module:model/FieldMetadata
   * @param key {String} The key of the field.
   * @param name {String} The name of the field.
   * @param operations {Array.<String>} The list of operations that can be performed on the field.
   * @param required {Boolean} Whether the field is required.
   */
  function FieldMetadata(key, name, operations, required) {
    _classCallCheck(this, FieldMetadata);

    FieldMetadata.initialize(this, key, name, operations, required);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FieldMetadata, null, [{
    key: "initialize",
    value: function initialize(obj, key, name, operations, required) {
      obj['key'] = key;
      obj['name'] = name;
      obj['operations'] = operations;
      obj['required'] = required;
    }
    /**
     * Constructs a <code>FieldMetadata</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FieldMetadata} obj Optional instance to populate.
     * @return {module:model/FieldMetadata} The populated <code>FieldMetadata</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FieldMetadata();

        if (data.hasOwnProperty('allowedValues')) {
          obj['allowedValues'] = _ApiClient["default"].convertToType(data['allowedValues'], [Object]);
        }

        if (data.hasOwnProperty('autoCompleteUrl')) {
          obj['autoCompleteUrl'] = _ApiClient["default"].convertToType(data['autoCompleteUrl'], 'String');
        }

        if (data.hasOwnProperty('defaultValue')) {
          obj['defaultValue'] = _ApiClient["default"].convertToType(data['defaultValue'], Object);
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
          obj['operations'] = _ApiClient["default"].convertToType(data['operations'], ['String']);
        }

        if (data.hasOwnProperty('required')) {
          obj['required'] = _ApiClient["default"].convertToType(data['required'], 'Boolean');
        }

        if (data.hasOwnProperty('schema')) {
          obj['schema'] = _ApiClient["default"].convertToType(data['schema'], _JsonTypeBean["default"]);
        }
      }

      return obj;
    }
  }]);

  return FieldMetadata;
}();
/**
 * The list of values allowed in the field.
 * @member {Array.<Object>} allowedValues
 */


FieldMetadata.prototype['allowedValues'] = undefined;
/**
 * The URL that can be used to automatically complete the field.
 * @member {String} autoCompleteUrl
 */

FieldMetadata.prototype['autoCompleteUrl'] = undefined;
/**
 * The default value of the field.
 * @member {Object} defaultValue
 */

FieldMetadata.prototype['defaultValue'] = undefined;
/**
 * Whether the field has a default value.
 * @member {Boolean} hasDefaultValue
 */

FieldMetadata.prototype['hasDefaultValue'] = undefined;
/**
 * The key of the field.
 * @member {String} key
 */

FieldMetadata.prototype['key'] = undefined;
/**
 * The name of the field.
 * @member {String} name
 */

FieldMetadata.prototype['name'] = undefined;
/**
 * The list of operations that can be performed on the field.
 * @member {Array.<String>} operations
 */

FieldMetadata.prototype['operations'] = undefined;
/**
 * Whether the field is required.
 * @member {Boolean} required
 */

FieldMetadata.prototype['required'] = undefined;
/**
 * The data type of the field.
 * @member {module:model/JsonTypeBean} schema
 */

FieldMetadata.prototype['schema'] = undefined;
var _default = FieldMetadata;
exports["default"] = _default;