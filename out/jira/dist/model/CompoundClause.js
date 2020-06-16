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
 * The CompoundClause model module.
 * @module model/CompoundClause
 * @version 1.4.0
 */
var CompoundClause = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CompoundClause</code>.
   * A JQL query clause that consists of nested clauses. For example, &#x60;(labels in (urgent, blocker) OR lastCommentedBy &#x3D; currentUser()). Note that, where nesting is not defined, the parser nests JQL clauses based on the operator precedence. For example, \&quot;A OR B AND C\&quot; is parsed as \&quot;(A OR B) AND C\&quot;. See Setting the precedence of operators for more information about precedence in JQL queries.&#x60;
   * @alias module:model/CompoundClause
   * @param clauses {Array.<Object>} The list of nested clauses.
   * @param operator {module:model/CompoundClause.OperatorEnum} The operator between the clauses.
   */
  function CompoundClause(clauses, operator) {
    _classCallCheck(this, CompoundClause);

    CompoundClause.initialize(this, clauses, operator);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CompoundClause, null, [{
    key: "initialize",
    value: function initialize(obj, clauses, operator) {
      obj['clauses'] = clauses;
      obj['operator'] = operator;
    }
    /**
     * Constructs a <code>CompoundClause</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CompoundClause} obj Optional instance to populate.
     * @return {module:model/CompoundClause} The populated <code>CompoundClause</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CompoundClause();

        if (data.hasOwnProperty('clauses')) {
          obj['clauses'] = _ApiClient["default"].convertToType(data['clauses'], [Object]);
        }

        if (data.hasOwnProperty('operator')) {
          obj['operator'] = _ApiClient["default"].convertToType(data['operator'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CompoundClause;
}();
/**
 * The list of nested clauses.
 * @member {Array.<Object>} clauses
 */


CompoundClause.prototype['clauses'] = undefined;
/**
 * The operator between the clauses.
 * @member {module:model/CompoundClause.OperatorEnum} operator
 */

CompoundClause.prototype['operator'] = undefined;
/**
 * Allowed values for the <code>operator</code> property.
 * @enum {String}
 * @readonly
 */

CompoundClause['OperatorEnum'] = {
  /**
   * value: "and"
   * @const
   */
  "and": "and",

  /**
   * value: "or"
   * @const
   */
  "or": "or",

  /**
   * value: "not"
   * @const
   */
  "not": "not"
};
var _default = CompoundClause;
exports["default"] = _default;