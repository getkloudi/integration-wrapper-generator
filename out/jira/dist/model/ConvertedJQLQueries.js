"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _JQLQueryWithUnknownUsers = _interopRequireDefault(require("./JQLQueryWithUnknownUsers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ConvertedJQLQueries model module.
 * @module model/ConvertedJQLQueries
 * @version 1.4.0
 */
var ConvertedJQLQueries = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ConvertedJQLQueries</code>.
   * The converted JQL queries.
   * @alias module:model/ConvertedJQLQueries
   */
  function ConvertedJQLQueries() {
    _classCallCheck(this, ConvertedJQLQueries);

    ConvertedJQLQueries.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ConvertedJQLQueries, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ConvertedJQLQueries</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConvertedJQLQueries} obj Optional instance to populate.
     * @return {module:model/ConvertedJQLQueries} The populated <code>ConvertedJQLQueries</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ConvertedJQLQueries();

        if (data.hasOwnProperty('queriesWithUnknownUsers')) {
          obj['queriesWithUnknownUsers'] = _ApiClient["default"].convertToType(data['queriesWithUnknownUsers'], [_JQLQueryWithUnknownUsers["default"]]);
        }

        if (data.hasOwnProperty('queryStrings')) {
          obj['queryStrings'] = _ApiClient["default"].convertToType(data['queryStrings'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return ConvertedJQLQueries;
}();
/**
 * List of queries containing user information that could not be mapped to an existing user
 * @member {Array.<module:model/JQLQueryWithUnknownUsers>} queriesWithUnknownUsers
 */


ConvertedJQLQueries.prototype['queriesWithUnknownUsers'] = undefined;
/**
 * The list of converted query strings with account IDs in place of user identifiers.
 * @member {Array.<String>} queryStrings
 */

ConvertedJQLQueries.prototype['queryStrings'] = undefined;
var _default = ConvertedJQLQueries;
exports["default"] = _default;