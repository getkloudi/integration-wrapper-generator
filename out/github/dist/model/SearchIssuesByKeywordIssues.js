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
 * The SearchIssuesByKeywordIssues model module.
 * @module model/SearchIssuesByKeywordIssues
 * @version 1.0.0
 */
var SearchIssuesByKeywordIssues =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>SearchIssuesByKeywordIssues</code>.
   * @alias module:model/SearchIssuesByKeywordIssues
   */
  function SearchIssuesByKeywordIssues() {
    _classCallCheck(this, SearchIssuesByKeywordIssues);

    SearchIssuesByKeywordIssues.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SearchIssuesByKeywordIssues, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SearchIssuesByKeywordIssues</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SearchIssuesByKeywordIssues} obj Optional instance to populate.
     * @return {module:model/SearchIssuesByKeywordIssues} The populated <code>SearchIssuesByKeywordIssues</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SearchIssuesByKeywordIssues();

        if (data.hasOwnProperty('body')) {
          obj['body'] = _ApiClient["default"].convertToType(data['body'], 'String');
        }

        if (data.hasOwnProperty('comments')) {
          obj['comments'] = _ApiClient["default"].convertToType(data['comments'], 'Number');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'String');
        }

        if (data.hasOwnProperty('gravatar_id')) {
          obj['gravatar_id'] = _ApiClient["default"].convertToType(data['gravatar_id'], 'String');
        }

        if (data.hasOwnProperty('html_url')) {
          obj['html_url'] = _ApiClient["default"].convertToType(data['html_url'], 'String');
        }

        if (data.hasOwnProperty('labels')) {
          obj['labels'] = _ApiClient["default"].convertToType(data['labels'], ['String']);
        }

        if (data.hasOwnProperty('number')) {
          obj['number'] = _ApiClient["default"].convertToType(data['number'], 'Number');
        }

        if (data.hasOwnProperty('position')) {
          obj['position'] = _ApiClient["default"].convertToType(data['position'], 'Number');
        }

        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'String');
        }

        if (data.hasOwnProperty('user')) {
          obj['user'] = _ApiClient["default"].convertToType(data['user'], 'String');
        }

        if (data.hasOwnProperty('votes')) {
          obj['votes'] = _ApiClient["default"].convertToType(data['votes'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return SearchIssuesByKeywordIssues;
}();
/**
 * @member {String} body
 */


SearchIssuesByKeywordIssues.prototype['body'] = undefined;
/**
 * @member {Number} comments
 */

SearchIssuesByKeywordIssues.prototype['comments'] = undefined;
/**
 * @member {String} created_at
 */

SearchIssuesByKeywordIssues.prototype['created_at'] = undefined;
/**
 * @member {String} gravatar_id
 */

SearchIssuesByKeywordIssues.prototype['gravatar_id'] = undefined;
/**
 * @member {String} html_url
 */

SearchIssuesByKeywordIssues.prototype['html_url'] = undefined;
/**
 * @member {Array.<String>} labels
 */

SearchIssuesByKeywordIssues.prototype['labels'] = undefined;
/**
 * @member {Number} number
 */

SearchIssuesByKeywordIssues.prototype['number'] = undefined;
/**
 * @member {Number} position
 */

SearchIssuesByKeywordIssues.prototype['position'] = undefined;
/**
 * @member {String} state
 */

SearchIssuesByKeywordIssues.prototype['state'] = undefined;
/**
 * @member {String} title
 */

SearchIssuesByKeywordIssues.prototype['title'] = undefined;
/**
 * @member {String} updated_at
 */

SearchIssuesByKeywordIssues.prototype['updated_at'] = undefined;
/**
 * @member {String} user
 */

SearchIssuesByKeywordIssues.prototype['user'] = undefined;
/**
 * @member {Number} votes
 */

SearchIssuesByKeywordIssues.prototype['votes'] = undefined;
var _default = SearchIssuesByKeywordIssues;
exports["default"] = _default;