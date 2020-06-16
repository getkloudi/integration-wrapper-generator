"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IssueBean = _interopRequireDefault(require("./IssueBean"));

var _JsonTypeBean = _interopRequireDefault(require("./JsonTypeBean"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SearchResults model module.
 * @module model/SearchResults
 * @version 1.4.0
 */
var SearchResults = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SearchResults</code>.
   * The result of a JQL search.
   * @alias module:model/SearchResults
   */
  function SearchResults() {
    _classCallCheck(this, SearchResults);

    SearchResults.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SearchResults, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SearchResults</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SearchResults} obj Optional instance to populate.
     * @return {module:model/SearchResults} The populated <code>SearchResults</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SearchResults();

        if (data.hasOwnProperty('expand')) {
          obj['expand'] = _ApiClient["default"].convertToType(data['expand'], 'String');
        }

        if (data.hasOwnProperty('issues')) {
          obj['issues'] = _ApiClient["default"].convertToType(data['issues'], [_IssueBean["default"]]);
        }

        if (data.hasOwnProperty('maxResults')) {
          obj['maxResults'] = _ApiClient["default"].convertToType(data['maxResults'], 'Number');
        }

        if (data.hasOwnProperty('names')) {
          obj['names'] = _ApiClient["default"].convertToType(data['names'], {
            'String': 'String'
          });
        }

        if (data.hasOwnProperty('schema')) {
          obj['schema'] = _ApiClient["default"].convertToType(data['schema'], {
            'String': _JsonTypeBean["default"]
          });
        }

        if (data.hasOwnProperty('startAt')) {
          obj['startAt'] = _ApiClient["default"].convertToType(data['startAt'], 'Number');
        }

        if (data.hasOwnProperty('total')) {
          obj['total'] = _ApiClient["default"].convertToType(data['total'], 'Number');
        }

        if (data.hasOwnProperty('warningMessages')) {
          obj['warningMessages'] = _ApiClient["default"].convertToType(data['warningMessages'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return SearchResults;
}();
/**
 * Expand options that include additional search result details in the response.
 * @member {String} expand
 */


SearchResults.prototype['expand'] = undefined;
/**
 * The list of issues found by the search.
 * @member {Array.<module:model/IssueBean>} issues
 */

SearchResults.prototype['issues'] = undefined;
/**
 * The maximum number of results that could be on the page.
 * @member {Number} maxResults
 */

SearchResults.prototype['maxResults'] = undefined;
/**
 * The ID and name of each field in the search results.
 * @member {Object.<String, String>} names
 */

SearchResults.prototype['names'] = undefined;
/**
 * The schema describing the field types in the search results.
 * @member {Object.<String, module:model/JsonTypeBean>} schema
 */

SearchResults.prototype['schema'] = undefined;
/**
 * The index of the first item returned on the page.
 * @member {Number} startAt
 */

SearchResults.prototype['startAt'] = undefined;
/**
 * The number of results on the page.
 * @member {Number} total
 */

SearchResults.prototype['total'] = undefined;
/**
 * Any warnings related to the JQL query.
 * @member {Array.<String>} warningMessages
 */

SearchResults.prototype['warningMessages'] = undefined;
var _default = SearchResults;
exports["default"] = _default;