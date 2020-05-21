"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CommitFile = _interopRequireDefault(require("./CommitFile"));

var _SearchContentMatch = _interopRequireDefault(require("./SearchContentMatch"));

var _SearchSegment = _interopRequireDefault(require("./SearchSegment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SearchCodeSearchResult model module.
 * @module model/SearchCodeSearchResult
 * @version 1.2.0
 */
var SearchCodeSearchResult = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SearchCodeSearchResult</code>.
   * @alias module:model/SearchCodeSearchResult
   */
  function SearchCodeSearchResult() {
    _classCallCheck(this, SearchCodeSearchResult);

    SearchCodeSearchResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SearchCodeSearchResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SearchCodeSearchResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SearchCodeSearchResult} obj Optional instance to populate.
     * @return {module:model/SearchCodeSearchResult} The populated <code>SearchCodeSearchResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SearchCodeSearchResult();

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('content_match_count')) {
          obj['content_match_count'] = _ApiClient["default"].convertToType(data['content_match_count'], 'Number');
        }

        if (data.hasOwnProperty('content_matches')) {
          obj['content_matches'] = _ApiClient["default"].convertToType(data['content_matches'], [_SearchContentMatch["default"]]);
        }

        if (data.hasOwnProperty('path_matches')) {
          obj['path_matches'] = _ApiClient["default"].convertToType(data['path_matches'], [_SearchSegment["default"]]);
        }

        if (data.hasOwnProperty('file')) {
          obj['file'] = _CommitFile["default"].constructFromObject(data['file']);
        }
      }

      return obj;
    }
  }]);

  return SearchCodeSearchResult;
}();
/**
 * @member {String} type
 */


SearchCodeSearchResult.prototype['type'] = undefined;
/**
 * @member {Number} content_match_count
 */

SearchCodeSearchResult.prototype['content_match_count'] = undefined;
/**
 * @member {Array.<module:model/SearchContentMatch>} content_matches
 */

SearchCodeSearchResult.prototype['content_matches'] = undefined;
/**
 * @member {Array.<module:model/SearchSegment>} path_matches
 */

SearchCodeSearchResult.prototype['path_matches'] = undefined;
/**
 * @member {module:model/CommitFile} file
 */

SearchCodeSearchResult.prototype['file'] = undefined;
var _default = SearchCodeSearchResult;
exports["default"] = _default;