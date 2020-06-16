"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _JqlQueryOrderByClauseElement = _interopRequireDefault(require("./JqlQueryOrderByClauseElement"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The JqlQueryOrderByClause model module.
 * @module model/JqlQueryOrderByClause
 * @version 1.4.0
 */
var JqlQueryOrderByClause = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>JqlQueryOrderByClause</code>.
   * Details of the order-by JQL clause.
   * @alias module:model/JqlQueryOrderByClause
   * @param fields {Array.<module:model/JqlQueryOrderByClauseElement>} The list of order-by clause fields and their ordering directives.
   */
  function JqlQueryOrderByClause(fields) {
    _classCallCheck(this, JqlQueryOrderByClause);

    JqlQueryOrderByClause.initialize(this, fields);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(JqlQueryOrderByClause, null, [{
    key: "initialize",
    value: function initialize(obj, fields) {
      obj['fields'] = fields;
    }
    /**
     * Constructs a <code>JqlQueryOrderByClause</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JqlQueryOrderByClause} obj Optional instance to populate.
     * @return {module:model/JqlQueryOrderByClause} The populated <code>JqlQueryOrderByClause</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new JqlQueryOrderByClause();

        if (data.hasOwnProperty('fields')) {
          obj['fields'] = _ApiClient["default"].convertToType(data['fields'], [_JqlQueryOrderByClauseElement["default"]]);
        }
      }

      return obj;
    }
  }]);

  return JqlQueryOrderByClause;
}();
/**
 * The list of order-by clause fields and their ordering directives.
 * @member {Array.<module:model/JqlQueryOrderByClauseElement>} fields
 */


JqlQueryOrderByClause.prototype['fields'] = undefined;
var _default = JqlQueryOrderByClause;
exports["default"] = _default;