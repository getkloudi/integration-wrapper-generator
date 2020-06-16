"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _JqlQueryClauseTimePredicate = _interopRequireDefault(require("./JqlQueryClauseTimePredicate"));

var _JqlQueryField = _interopRequireDefault(require("./JqlQueryField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The FieldWasClause model module.
 * @module model/FieldWasClause
 * @version 1.4.0
 */
var FieldWasClause = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FieldWasClause</code>.
   * A clause that asserts a previous value of a field. For example, &#x60;status WAS \&quot;Resolved\&quot; BY currentUser() BEFORE \&quot;2019/02/02\&quot;&#x60;. See [WAS](https://confluence.atlassian.com/x/dgiiLQ#Advancedsearching-operatorsreference-WASWAS) for more information about the WAS operator.
   * @alias module:model/FieldWasClause
   * @param field {module:model/JqlQueryField} 
   * @param operand {Object} Details of an operand in a JQL clause.
   * @param operator {module:model/FieldWasClause.OperatorEnum} The operator between the field and operand.
   * @param predicates {Array.<module:model/JqlQueryClauseTimePredicate>} The list of time predicates.
   */
  function FieldWasClause(field, operand, operator, predicates) {
    _classCallCheck(this, FieldWasClause);

    FieldWasClause.initialize(this, field, operand, operator, predicates);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FieldWasClause, null, [{
    key: "initialize",
    value: function initialize(obj, field, operand, operator, predicates) {
      obj['field'] = field;
      obj['operand'] = operand;
      obj['operator'] = operator;
      obj['predicates'] = predicates;
    }
    /**
     * Constructs a <code>FieldWasClause</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FieldWasClause} obj Optional instance to populate.
     * @return {module:model/FieldWasClause} The populated <code>FieldWasClause</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FieldWasClause();

        if (data.hasOwnProperty('field')) {
          obj['field'] = _JqlQueryField["default"].constructFromObject(data['field']);
        }

        if (data.hasOwnProperty('operand')) {
          obj['operand'] = _ApiClient["default"].convertToType(data['operand'], Object);
        }

        if (data.hasOwnProperty('operator')) {
          obj['operator'] = _ApiClient["default"].convertToType(data['operator'], 'String');
        }

        if (data.hasOwnProperty('predicates')) {
          obj['predicates'] = _ApiClient["default"].convertToType(data['predicates'], [_JqlQueryClauseTimePredicate["default"]]);
        }
      }

      return obj;
    }
  }]);

  return FieldWasClause;
}();
/**
 * @member {module:model/JqlQueryField} field
 */


FieldWasClause.prototype['field'] = undefined;
/**
 * Details of an operand in a JQL clause.
 * @member {Object} operand
 */

FieldWasClause.prototype['operand'] = undefined;
/**
 * The operator between the field and operand.
 * @member {module:model/FieldWasClause.OperatorEnum} operator
 */

FieldWasClause.prototype['operator'] = undefined;
/**
 * The list of time predicates.
 * @member {Array.<module:model/JqlQueryClauseTimePredicate>} predicates
 */

FieldWasClause.prototype['predicates'] = undefined;
/**
 * Allowed values for the <code>operator</code> property.
 * @enum {String}
 * @readonly
 */

FieldWasClause['OperatorEnum'] = {
  /**
   * value: "was"
   * @const
   */
  "was": "was",

  /**
   * value: "was in"
   * @const
   */
  "was in": "was in",

  /**
   * value: "was not in"
   * @const
   */
  "was not in": "was not in",

  /**
   * value: "was not"
   * @const
   */
  "was not": "was not"
};
var _default = FieldWasClause;
exports["default"] = _default;