"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _JqlQuery = _interopRequireDefault(require("./JqlQuery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ParsedJqlQuery model module.
 * @module model/ParsedJqlQuery
 * @version 1.4.0
 */
var ParsedJqlQuery = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ParsedJqlQuery</code>.
   * Details of a parsed JQL query.
   * @alias module:model/ParsedJqlQuery
   * @param query {String} The JQL query that was parsed and validated.
   */
  function ParsedJqlQuery(query) {
    _classCallCheck(this, ParsedJqlQuery);

    ParsedJqlQuery.initialize(this, query);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ParsedJqlQuery, null, [{
    key: "initialize",
    value: function initialize(obj, query) {
      obj['query'] = query;
    }
    /**
     * Constructs a <code>ParsedJqlQuery</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ParsedJqlQuery} obj Optional instance to populate.
     * @return {module:model/ParsedJqlQuery} The populated <code>ParsedJqlQuery</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ParsedJqlQuery();

        if (data.hasOwnProperty('errors')) {
          obj['errors'] = _ApiClient["default"].convertToType(data['errors'], ['String']);
        }

        if (data.hasOwnProperty('query')) {
          obj['query'] = _ApiClient["default"].convertToType(data['query'], 'String');
        }

        if (data.hasOwnProperty('structure')) {
          obj['structure'] = _ApiClient["default"].convertToType(data['structure'], _JqlQuery["default"]);
        }
      }

      return obj;
    }
  }]);

  return ParsedJqlQuery;
}();
/**
 * The list of syntax or validation errors.
 * @member {Array.<String>} errors
 */


ParsedJqlQuery.prototype['errors'] = undefined;
/**
 * The JQL query that was parsed and validated.
 * @member {String} query
 */

ParsedJqlQuery.prototype['query'] = undefined;
/**
 * The syntax tree of the query. Empty if the query was invalid.
 * @member {module:model/JqlQuery} structure
 */

ParsedJqlQuery.prototype['structure'] = undefined;
var _default = ParsedJqlQuery;
exports["default"] = _default;