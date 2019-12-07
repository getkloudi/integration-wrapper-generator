"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IssueEventIssueLabels = _interopRequireDefault(require("./IssueEventIssueLabels"));

var _User = _interopRequireDefault(require("./User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SearchIssuesItems model module.
 * @module model/SearchIssuesItems
 * @version 1.0.0
 */
var SearchIssuesItems =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>SearchIssuesItems</code>.
   * @alias module:model/SearchIssuesItems
   */
  function SearchIssuesItems() {
    _classCallCheck(this, SearchIssuesItems);

    SearchIssuesItems.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SearchIssuesItems, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SearchIssuesItems</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SearchIssuesItems} obj Optional instance to populate.
     * @return {module:model/SearchIssuesItems} The populated <code>SearchIssuesItems</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SearchIssuesItems();

        if (data.hasOwnProperty('body')) {
          obj['body'] = _ApiClient["default"].convertToType(data['body'], 'String');
        }

        if (data.hasOwnProperty('comments')) {
          obj['comments'] = _ApiClient["default"].convertToType(data['comments'], 'Number');
        }

        if (data.hasOwnProperty('comments_url')) {
          obj['comments_url'] = _ApiClient["default"].convertToType(data['comments_url'], 'String');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'String');
        }

        if (data.hasOwnProperty('events_url')) {
          obj['events_url'] = _ApiClient["default"].convertToType(data['events_url'], 'String');
        }

        if (data.hasOwnProperty('html_url')) {
          obj['html_url'] = _ApiClient["default"].convertToType(data['html_url'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('labels')) {
          obj['labels'] = _ApiClient["default"].convertToType(data['labels'], [_IssueEventIssueLabels["default"]]);
        }

        if (data.hasOwnProperty('labels_url')) {
          obj['labels_url'] = _ApiClient["default"].convertToType(data['labels_url'], 'String');
        }

        if (data.hasOwnProperty('number')) {
          obj['number'] = _ApiClient["default"].convertToType(data['number'], 'Number');
        }

        if (data.hasOwnProperty('pull_request')) {
          obj['pull_request'] = _ApiClient["default"].convertToType(data['pull_request'], Object);
        }

        if (data.hasOwnProperty('score')) {
          obj['score'] = _ApiClient["default"].convertToType(data['score'], 'Number');
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

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }

        if (data.hasOwnProperty('user')) {
          obj['user'] = _User["default"].constructFromObject(data['user']);
        }
      }

      return obj;
    }
  }]);

  return SearchIssuesItems;
}();
/**
 * @member {String} body
 */


SearchIssuesItems.prototype['body'] = undefined;
/**
 * @member {Number} comments
 */

SearchIssuesItems.prototype['comments'] = undefined;
/**
 * @member {String} comments_url
 */

SearchIssuesItems.prototype['comments_url'] = undefined;
/**
 * @member {String} created_at
 */

SearchIssuesItems.prototype['created_at'] = undefined;
/**
 * @member {String} events_url
 */

SearchIssuesItems.prototype['events_url'] = undefined;
/**
 * @member {String} html_url
 */

SearchIssuesItems.prototype['html_url'] = undefined;
/**
 * @member {Number} id
 */

SearchIssuesItems.prototype['id'] = undefined;
/**
 * @member {Array.<module:model/IssueEventIssueLabels>} labels
 */

SearchIssuesItems.prototype['labels'] = undefined;
/**
 * @member {String} labels_url
 */

SearchIssuesItems.prototype['labels_url'] = undefined;
/**
 * @member {Number} number
 */

SearchIssuesItems.prototype['number'] = undefined;
/**
 * @member {Object} pull_request
 */

SearchIssuesItems.prototype['pull_request'] = undefined;
/**
 * @member {Number} score
 */

SearchIssuesItems.prototype['score'] = undefined;
/**
 * @member {String} state
 */

SearchIssuesItems.prototype['state'] = undefined;
/**
 * @member {String} title
 */

SearchIssuesItems.prototype['title'] = undefined;
/**
 * @member {String} updated_at
 */

SearchIssuesItems.prototype['updated_at'] = undefined;
/**
 * @member {String} url
 */

SearchIssuesItems.prototype['url'] = undefined;
/**
 * @member {module:model/User} user
 */

SearchIssuesItems.prototype['user'] = undefined;
var _default = SearchIssuesItems;
exports["default"] = _default;