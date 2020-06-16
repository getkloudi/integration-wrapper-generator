"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ParsedJqlQuery = _interopRequireDefault(require("./ParsedJqlQuery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ParsedJqlQueries model module.
 * @module model/ParsedJqlQueries
 * @version 1.4.0
 */
var ParsedJqlQueries = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ParsedJqlQueries</code>.
   * A list of parsed JQL queries.
   * @alias module:model/ParsedJqlQueries
   * @param queries {Array.<module:model/ParsedJqlQuery>} A list of parsed JQL queries.
   */
  function ParsedJqlQueries(queries) {
    _classCallCheck(this, ParsedJqlQueries);

    ParsedJqlQueries.initialize(this, queries);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ParsedJqlQueries, null, [{
    key: "initialize",
    value: function initialize(obj, queries) {
      obj['queries'] = queries;
    }
    /**
     * Constructs a <code>ParsedJqlQueries</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ParsedJqlQueries} obj Optional instance to populate.
     * @return {module:model/ParsedJqlQueries} The populated <code>ParsedJqlQueries</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ParsedJqlQueries();

        if (data.hasOwnProperty('queries')) {
          obj['queries'] = _ApiClient["default"].convertToType(data['queries'], [_ParsedJqlQuery["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ParsedJqlQueries;
}();
/**
 * A list of parsed JQL queries.
 * @member {Array.<module:model/ParsedJqlQuery>} queries
 */


ParsedJqlQueries.prototype['queries'] = undefined;
var _default = ParsedJqlQueries;
exports["default"] = _default;