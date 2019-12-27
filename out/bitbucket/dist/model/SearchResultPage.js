"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SearchCodeSearchResult = _interopRequireDefault(require("./SearchCodeSearchResult"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SearchResultPage model module.
 * @module model/SearchResultPage
 * @version 1.1.2
 */
var SearchResultPage =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>SearchResultPage</code>.
   * @alias module:model/SearchResultPage
   */
  function SearchResultPage() {
    _classCallCheck(this, SearchResultPage);

    SearchResultPage.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SearchResultPage, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SearchResultPage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SearchResultPage} obj Optional instance to populate.
     * @return {module:model/SearchResultPage} The populated <code>SearchResultPage</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SearchResultPage();

        if (data.hasOwnProperty('size')) {
          obj['size'] = _ApiClient["default"].convertToType(data['size'], 'Number');
        }

        if (data.hasOwnProperty('page')) {
          obj['page'] = _ApiClient["default"].convertToType(data['page'], 'Number');
        }

        if (data.hasOwnProperty('pagelen')) {
          obj['pagelen'] = _ApiClient["default"].convertToType(data['pagelen'], 'Number');
        }

        if (data.hasOwnProperty('query_substituted')) {
          obj['query_substituted'] = _ApiClient["default"].convertToType(data['query_substituted'], 'Boolean');
        }

        if (data.hasOwnProperty('next')) {
          obj['next'] = _ApiClient["default"].convertToType(data['next'], 'String');
        }

        if (data.hasOwnProperty('previous')) {
          obj['previous'] = _ApiClient["default"].convertToType(data['previous'], 'String');
        }

        if (data.hasOwnProperty('values')) {
          obj['values'] = _ApiClient["default"].convertToType(data['values'], [_SearchCodeSearchResult["default"]]);
        }
      }

      return obj;
    }
  }]);

  return SearchResultPage;
}();
/**
 * @member {Number} size
 */


SearchResultPage.prototype['size'] = undefined;
/**
 * @member {Number} page
 */

SearchResultPage.prototype['page'] = undefined;
/**
 * @member {Number} pagelen
 */

SearchResultPage.prototype['pagelen'] = undefined;
/**
 * @member {Boolean} query_substituted
 */

SearchResultPage.prototype['query_substituted'] = undefined;
/**
 * @member {String} next
 */

SearchResultPage.prototype['next'] = undefined;
/**
 * @member {String} previous
 */

SearchResultPage.prototype['previous'] = undefined;
/**
 * @member {Array.<module:model/SearchCodeSearchResult>} values
 */

SearchResultPage.prototype['values'] = undefined;
var _default = SearchResultPage;
exports["default"] = _default;