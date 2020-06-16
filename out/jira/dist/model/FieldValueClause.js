"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _JqlQueryField = _interopRequireDefault(require("./JqlQueryField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The FieldValueClause model module.
 * @module model/FieldValueClause
 * @version 1.4.0
 */
var FieldValueClause = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FieldValueClause</code>.
   * A clause that asserts the current value of a field. For example, &#x60;summary ~ test&#x60;.
   * @alias module:model/FieldValueClause
   * @param field {module:model/JqlQueryField} 
   * @param operand {Object} Details of an operand in a JQL clause.
   * @param operator {module:model/FieldValueClause.OperatorEnum} The operator between the field and operand.
   */
  function FieldValueClause(field, operand, operator) {
    _classCallCheck(this, FieldValueClause);

    FieldValueClause.initialize(this, field, operand, operator);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FieldValueClause, null, [{
    key: "initialize",
    value: function initialize(obj, field, operand, operator) {
      obj['field'] = field;
      obj['operand'] = operand;
      obj['operator'] = operator;
    }
    /**
     * Constructs a <code>FieldValueClause</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FieldValueClause} obj Optional instance to populate.
     * @return {module:model/FieldValueClause} The populated <code>FieldValueClause</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FieldValueClause();

        if (data.hasOwnProperty('field')) {
          obj['field'] = _JqlQueryField["default"].constructFromObject(data['field']);
        }

        if (data.hasOwnProperty('operand')) {
          obj['operand'] = _ApiClient["default"].convertToType(data['operand'], Object);
        }

        if (data.hasOwnProperty('operator')) {
          obj['operator'] = _ApiClient["default"].convertToType(data['operator'], 'String');
        }
      }

      return obj;
    }
  }]);

  return FieldValueClause;
}();
/**
 * @member {module:model/JqlQueryField} field
 */


FieldValueClause.prototype['field'] = undefined;
/**
 * Details of an operand in a JQL clause.
 * @member {Object} operand
 */

FieldValueClause.prototype['operand'] = undefined;
/**
 * The operator between the field and operand.
 * @member {module:model/FieldValueClause.OperatorEnum} operator
 */

FieldValueClause.prototype['operator'] = undefined;
/**
 * Allowed values for the <code>operator</code> property.
 * @enum {String}
 * @readonly
 */

FieldValueClause['OperatorEnum'] = {
  /**
   * value: "="
   * @const
   */
  "EQUAL": "=",

  /**
   * value: "!="
   * @const
   */
  "NOT_EQUAL": "!=",

  /**
   * value: ">"
   * @const
   */
  "GREATER_THAN": ">",

  /**
   * value: "<"
   * @const
   */
  "LESS_THAN": "<",

  /**
   * value: ">="
   * @const
   */
  "GREATER_THAN_OR_EQUAL_TO": ">=",

  /**
   * value: "<="
   * @const
   */
  "LESS_THAN_OR_EQUAL_TO": "<=",

  /**
   * value: "in"
   * @const
   */
  "in": "in",

  /**
   * value: "not in"
   * @const
   */
  "not in": "not in",

  /**
   * value: "~="
   * @const
   */
  "~&#x3D;": "~=",

  /**
   * value: "is"
   * @const
   */
  "is": "is",

  /**
   * value: "is not"
   * @const
   */
  "is not": "is not"
};
var _default = FieldValueClause;
exports["default"] = _default;