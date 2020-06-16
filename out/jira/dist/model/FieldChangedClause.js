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
 * The FieldChangedClause model module.
 * @module model/FieldChangedClause
 * @version 1.4.0
 */
var FieldChangedClause = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FieldChangedClause</code>.
   * A clause that asserts whether a field was changed. For example, &#x60;status CHANGED AFTER startOfMonth(-1M)&#x60;.See [CHANGED](https://confluence.atlassian.com/x/dgiiLQ#Advancedsearching-operatorsreference-CHANGEDCHANGED) for more information about the CHANGED operator.
   * @alias module:model/FieldChangedClause
   * @param field {module:model/JqlQueryField} 
   * @param operator {module:model/FieldChangedClause.OperatorEnum} The operator applied to the field.
   * @param predicates {Array.<module:model/JqlQueryClauseTimePredicate>} The list of time predicates.
   */
  function FieldChangedClause(field, operator, predicates) {
    _classCallCheck(this, FieldChangedClause);

    FieldChangedClause.initialize(this, field, operator, predicates);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FieldChangedClause, null, [{
    key: "initialize",
    value: function initialize(obj, field, operator, predicates) {
      obj['field'] = field;
      obj['operator'] = operator;
      obj['predicates'] = predicates;
    }
    /**
     * Constructs a <code>FieldChangedClause</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FieldChangedClause} obj Optional instance to populate.
     * @return {module:model/FieldChangedClause} The populated <code>FieldChangedClause</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FieldChangedClause();

        if (data.hasOwnProperty('field')) {
          obj['field'] = _JqlQueryField["default"].constructFromObject(data['field']);
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

  return FieldChangedClause;
}();
/**
 * @member {module:model/JqlQueryField} field
 */


FieldChangedClause.prototype['field'] = undefined;
/**
 * The operator applied to the field.
 * @member {module:model/FieldChangedClause.OperatorEnum} operator
 */

FieldChangedClause.prototype['operator'] = undefined;
/**
 * The list of time predicates.
 * @member {Array.<module:model/JqlQueryClauseTimePredicate>} predicates
 */

FieldChangedClause.prototype['predicates'] = undefined;
/**
 * Allowed values for the <code>operator</code> property.
 * @enum {String}
 * @readonly
 */

FieldChangedClause['OperatorEnum'] = {
  /**
   * value: "changed"
   * @const
   */
  "changed": "changed"
};
var _default = FieldChangedClause;
exports["default"] = _default;