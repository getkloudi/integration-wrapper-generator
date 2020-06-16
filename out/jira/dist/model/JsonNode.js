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
 * The JsonNode model module.
 * @module model/JsonNode
 * @version 1.4.0
 */
var JsonNode = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>JsonNode</code>.
   * @alias module:model/JsonNode
   */
  function JsonNode() {
    _classCallCheck(this, JsonNode);

    JsonNode.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(JsonNode, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>JsonNode</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JsonNode} obj Optional instance to populate.
     * @return {module:model/JsonNode} The populated <code>JsonNode</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new JsonNode();

        if (data.hasOwnProperty('array')) {
          obj['array'] = _ApiClient["default"].convertToType(data['array'], 'Boolean');
        }

        if (data.hasOwnProperty('bigDecimal')) {
          obj['bigDecimal'] = _ApiClient["default"].convertToType(data['bigDecimal'], 'Boolean');
        }

        if (data.hasOwnProperty('bigInteger')) {
          obj['bigInteger'] = _ApiClient["default"].convertToType(data['bigInteger'], 'Boolean');
        }

        if (data.hasOwnProperty('bigIntegerValue')) {
          obj['bigIntegerValue'] = _ApiClient["default"].convertToType(data['bigIntegerValue'], 'Number');
        }

        if (data.hasOwnProperty('binary')) {
          obj['binary'] = _ApiClient["default"].convertToType(data['binary'], 'Boolean');
        }

        if (data.hasOwnProperty('binaryValue')) {
          obj['binaryValue'] = _ApiClient["default"].convertToType(data['binaryValue'], ['Blob']);
        }

        if (data.hasOwnProperty('boolean')) {
          obj['boolean'] = _ApiClient["default"].convertToType(data['boolean'], 'Boolean');
        }

        if (data.hasOwnProperty('booleanValue')) {
          obj['booleanValue'] = _ApiClient["default"].convertToType(data['booleanValue'], 'Boolean');
        }

        if (data.hasOwnProperty('containerNode')) {
          obj['containerNode'] = _ApiClient["default"].convertToType(data['containerNode'], 'Boolean');
        }

        if (data.hasOwnProperty('decimalValue')) {
          obj['decimalValue'] = _ApiClient["default"].convertToType(data['decimalValue'], 'Number');
        }

        if (data.hasOwnProperty('double')) {
          obj['double'] = _ApiClient["default"].convertToType(data['double'], 'Boolean');
        }

        if (data.hasOwnProperty('doubleValue')) {
          obj['doubleValue'] = _ApiClient["default"].convertToType(data['doubleValue'], 'Number');
        }

        if (data.hasOwnProperty('elements')) {
          obj['elements'] = _ApiClient["default"].convertToType(data['elements'], Object);
        }

        if (data.hasOwnProperty('fieldNames')) {
          obj['fieldNames'] = _ApiClient["default"].convertToType(data['fieldNames'], Object);
        }

        if (data.hasOwnProperty('fields')) {
          obj['fields'] = _ApiClient["default"].convertToType(data['fields'], Object);
        }

        if (data.hasOwnProperty('floatingPointNumber')) {
          obj['floatingPointNumber'] = _ApiClient["default"].convertToType(data['floatingPointNumber'], 'Boolean');
        }

        if (data.hasOwnProperty('int')) {
          obj['int'] = _ApiClient["default"].convertToType(data['int'], 'Boolean');
        }

        if (data.hasOwnProperty('intValue')) {
          obj['intValue'] = _ApiClient["default"].convertToType(data['intValue'], 'Number');
        }

        if (data.hasOwnProperty('integralNumber')) {
          obj['integralNumber'] = _ApiClient["default"].convertToType(data['integralNumber'], 'Boolean');
        }

        if (data.hasOwnProperty('long')) {
          obj['long'] = _ApiClient["default"].convertToType(data['long'], 'Boolean');
        }

        if (data.hasOwnProperty('longValue')) {
          obj['longValue'] = _ApiClient["default"].convertToType(data['longValue'], 'Number');
        }

        if (data.hasOwnProperty('missingNode')) {
          obj['missingNode'] = _ApiClient["default"].convertToType(data['missingNode'], 'Boolean');
        }

        if (data.hasOwnProperty('null')) {
          obj['null'] = _ApiClient["default"].convertToType(data['null'], 'Boolean');
        }

        if (data.hasOwnProperty('number')) {
          obj['number'] = _ApiClient["default"].convertToType(data['number'], 'Boolean');
        }

        if (data.hasOwnProperty('numberType')) {
          obj['numberType'] = _ApiClient["default"].convertToType(data['numberType'], 'String');
        }

        if (data.hasOwnProperty('numberValue')) {
          obj['numberValue'] = _ApiClient["default"].convertToType(data['numberValue'], 'Number');
        }

        if (data.hasOwnProperty('object')) {
          obj['object'] = _ApiClient["default"].convertToType(data['object'], 'Boolean');
        }

        if (data.hasOwnProperty('pojo')) {
          obj['pojo'] = _ApiClient["default"].convertToType(data['pojo'], 'Boolean');
        }

        if (data.hasOwnProperty('textValue')) {
          obj['textValue'] = _ApiClient["default"].convertToType(data['textValue'], 'String');
        }

        if (data.hasOwnProperty('textual')) {
          obj['textual'] = _ApiClient["default"].convertToType(data['textual'], 'Boolean');
        }

        if (data.hasOwnProperty('valueAsBoolean')) {
          obj['valueAsBoolean'] = _ApiClient["default"].convertToType(data['valueAsBoolean'], 'Boolean');
        }

        if (data.hasOwnProperty('valueAsDouble')) {
          obj['valueAsDouble'] = _ApiClient["default"].convertToType(data['valueAsDouble'], 'Number');
        }

        if (data.hasOwnProperty('valueAsInt')) {
          obj['valueAsInt'] = _ApiClient["default"].convertToType(data['valueAsInt'], 'Number');
        }

        if (data.hasOwnProperty('valueAsLong')) {
          obj['valueAsLong'] = _ApiClient["default"].convertToType(data['valueAsLong'], 'Number');
        }

        if (data.hasOwnProperty('valueAsText')) {
          obj['valueAsText'] = _ApiClient["default"].convertToType(data['valueAsText'], 'String');
        }

        if (data.hasOwnProperty('valueNode')) {
          obj['valueNode'] = _ApiClient["default"].convertToType(data['valueNode'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return JsonNode;
}();
/**
 * @member {Boolean} array
 */


JsonNode.prototype['array'] = undefined;
/**
 * @member {Boolean} bigDecimal
 */

JsonNode.prototype['bigDecimal'] = undefined;
/**
 * @member {Boolean} bigInteger
 */

JsonNode.prototype['bigInteger'] = undefined;
/**
 * @member {Number} bigIntegerValue
 */

JsonNode.prototype['bigIntegerValue'] = undefined;
/**
 * @member {Boolean} binary
 */

JsonNode.prototype['binary'] = undefined;
/**
 * @member {Array.<Blob>} binaryValue
 */

JsonNode.prototype['binaryValue'] = undefined;
/**
 * @member {Boolean} boolean
 */

JsonNode.prototype['boolean'] = undefined;
/**
 * @member {Boolean} booleanValue
 */

JsonNode.prototype['booleanValue'] = undefined;
/**
 * @member {Boolean} containerNode
 */

JsonNode.prototype['containerNode'] = undefined;
/**
 * @member {Number} decimalValue
 */

JsonNode.prototype['decimalValue'] = undefined;
/**
 * @member {Boolean} double
 */

JsonNode.prototype['double'] = undefined;
/**
 * @member {Number} doubleValue
 */

JsonNode.prototype['doubleValue'] = undefined;
/**
 * @member {Object} elements
 */

JsonNode.prototype['elements'] = undefined;
/**
 * @member {Object} fieldNames
 */

JsonNode.prototype['fieldNames'] = undefined;
/**
 * @member {Object} fields
 */

JsonNode.prototype['fields'] = undefined;
/**
 * @member {Boolean} floatingPointNumber
 */

JsonNode.prototype['floatingPointNumber'] = undefined;
/**
 * @member {Boolean} int
 */

JsonNode.prototype['int'] = undefined;
/**
 * @member {Number} intValue
 */

JsonNode.prototype['intValue'] = undefined;
/**
 * @member {Boolean} integralNumber
 */

JsonNode.prototype['integralNumber'] = undefined;
/**
 * @member {Boolean} long
 */

JsonNode.prototype['long'] = undefined;
/**
 * @member {Number} longValue
 */

JsonNode.prototype['longValue'] = undefined;
/**
 * @member {Boolean} missingNode
 */

JsonNode.prototype['missingNode'] = undefined;
/**
 * @member {Boolean} null
 */

JsonNode.prototype['null'] = undefined;
/**
 * @member {Boolean} number
 */

JsonNode.prototype['number'] = undefined;
/**
 * @member {module:model/JsonNode.NumberTypeEnum} numberType
 */

JsonNode.prototype['numberType'] = undefined;
/**
 * @member {Number} numberValue
 */

JsonNode.prototype['numberValue'] = undefined;
/**
 * @member {Boolean} object
 */

JsonNode.prototype['object'] = undefined;
/**
 * @member {Boolean} pojo
 */

JsonNode.prototype['pojo'] = undefined;
/**
 * @member {String} textValue
 */

JsonNode.prototype['textValue'] = undefined;
/**
 * @member {Boolean} textual
 */

JsonNode.prototype['textual'] = undefined;
/**
 * @member {Boolean} valueAsBoolean
 */

JsonNode.prototype['valueAsBoolean'] = undefined;
/**
 * @member {Number} valueAsDouble
 */

JsonNode.prototype['valueAsDouble'] = undefined;
/**
 * @member {Number} valueAsInt
 */

JsonNode.prototype['valueAsInt'] = undefined;
/**
 * @member {Number} valueAsLong
 */

JsonNode.prototype['valueAsLong'] = undefined;
/**
 * @member {String} valueAsText
 */

JsonNode.prototype['valueAsText'] = undefined;
/**
 * @member {Boolean} valueNode
 */

JsonNode.prototype['valueNode'] = undefined;
/**
 * Allowed values for the <code>numberType</code> property.
 * @enum {String}
 * @readonly
 */

JsonNode['NumberTypeEnum'] = {
  /**
   * value: "INT"
   * @const
   */
  "INT": "INT",

  /**
   * value: "LONG"
   * @const
   */
  "LONG": "LONG",

  /**
   * value: "BIG_INTEGER"
   * @const
   */
  "BIG_INTEGER": "BIG_INTEGER",

  /**
   * value: "FLOAT"
   * @const
   */
  "FLOAT": "FLOAT",

  /**
   * value: "DOUBLE"
   * @const
   */
  "DOUBLE": "DOUBLE",

  /**
   * value: "BIG_DECIMAL"
   * @const
   */
  "BIG_DECIMAL": "BIG_DECIMAL"
};
var _default = JsonNode;
exports["default"] = _default;