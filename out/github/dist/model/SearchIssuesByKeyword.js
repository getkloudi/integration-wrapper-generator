"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SearchIssuesByKeywordIssues = _interopRequireDefault(require("./SearchIssuesByKeywordIssues"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SearchIssuesByKeyword model module.
 * @module model/SearchIssuesByKeyword
 * @version 1.2.0
 */
var SearchIssuesByKeyword =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>SearchIssuesByKeyword</code>.
   * @alias module:model/SearchIssuesByKeyword
   */
  function SearchIssuesByKeyword() {
    _classCallCheck(this, SearchIssuesByKeyword);

    SearchIssuesByKeyword.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SearchIssuesByKeyword, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SearchIssuesByKeyword</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SearchIssuesByKeyword} obj Optional instance to populate.
     * @return {module:model/SearchIssuesByKeyword} The populated <code>SearchIssuesByKeyword</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SearchIssuesByKeyword();

        if (data.hasOwnProperty('issues')) {
          obj['issues'] = _ApiClient["default"].convertToType(data['issues'], [_SearchIssuesByKeywordIssues["default"]]);
        }
      }

      return obj;
    }
  }]);

  return SearchIssuesByKeyword;
}();
/**
 * @member {Array.<module:model/SearchIssuesByKeywordIssues>} issues
 */


SearchIssuesByKeyword.prototype['issues'] = undefined;
var _default = SearchIssuesByKeyword;
exports["default"] = _default;