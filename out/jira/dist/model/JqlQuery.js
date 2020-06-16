"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _JqlQueryOrderByClause = _interopRequireDefault(require("./JqlQueryOrderByClause"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The JqlQuery model module.
 * @module model/JqlQuery
 * @version 1.4.0
 */
var JqlQuery = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>JqlQuery</code>.
   * A parsed JQL query.
   * @alias module:model/JqlQuery
   */
  function JqlQuery() {
    _classCallCheck(this, JqlQuery);

    JqlQuery.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(JqlQuery, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>JqlQuery</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JqlQuery} obj Optional instance to populate.
     * @return {module:model/JqlQuery} The populated <code>JqlQuery</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new JqlQuery();

        if (data.hasOwnProperty('orderBy')) {
          obj['orderBy'] = _JqlQueryOrderByClause["default"].constructFromObject(data['orderBy']);
        }

        if (data.hasOwnProperty('where')) {
          obj['where'] = _ApiClient["default"].convertToType(data['where'], Object);
        }
      }

      return obj;
    }
  }]);

  return JqlQuery;
}();
/**
 * @member {module:model/JqlQueryOrderByClause} orderBy
 */


JqlQuery.prototype['orderBy'] = undefined;
/**
 * A JQL query clause.
 * @member {Object} where
 */

JqlQuery.prototype['where'] = undefined;
var _default = JqlQuery;
exports["default"] = _default;