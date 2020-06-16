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
 * The JqlQueryClauseTimePredicate model module.
 * @module model/JqlQueryClauseTimePredicate
 * @version 1.4.0
 */
var JqlQueryClauseTimePredicate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>JqlQueryClauseTimePredicate</code>.
   * A time predicate for a temporal JQL clause.
   * @alias module:model/JqlQueryClauseTimePredicate
   * @param operand {Object} Details of an operand in a JQL clause.
   * @param operator {module:model/JqlQueryClauseTimePredicate.OperatorEnum} The operator between the field and the operand.
   */
  function JqlQueryClauseTimePredicate(operand, operator) {
    _classCallCheck(this, JqlQueryClauseTimePredicate);

    JqlQueryClauseTimePredicate.initialize(this, operand, operator);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(JqlQueryClauseTimePredicate, null, [{
    key: "initialize",
    value: function initialize(obj, operand, operator) {
      obj['operand'] = operand;
      obj['operator'] = operator;
    }
    /**
     * Constructs a <code>JqlQueryClauseTimePredicate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JqlQueryClauseTimePredicate} obj Optional instance to populate.
     * @return {module:model/JqlQueryClauseTimePredicate} The populated <code>JqlQueryClauseTimePredicate</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new JqlQueryClauseTimePredicate();

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

  return JqlQueryClauseTimePredicate;
}();
/**
 * Details of an operand in a JQL clause.
 * @member {Object} operand
 */


JqlQueryClauseTimePredicate.prototype['operand'] = undefined;
/**
 * The operator between the field and the operand.
 * @member {module:model/JqlQueryClauseTimePredicate.OperatorEnum} operator
 */

JqlQueryClauseTimePredicate.prototype['operator'] = undefined;
/**
 * Allowed values for the <code>operator</code> property.
 * @enum {String}
 * @readonly
 */

JqlQueryClauseTimePredicate['OperatorEnum'] = {
  /**
   * value: "before"
   * @const
   */
  "before": "before",

  /**
   * value: "after"
   * @const
   */
  "after": "after",

  /**
   * value: "from"
   * @const
   */
  "from": "from",

  /**
   * value: "to"
   * @const
   */
  "to": "to",

  /**
   * value: "on"
   * @const
   */
  "on": "on",

  /**
   * value: "during"
   * @const
   */
  "during": "during",

  /**
   * value: "by"
   * @const
   */
  "by": "by"
};
var _default = JqlQueryClauseTimePredicate;
exports["default"] = _default;