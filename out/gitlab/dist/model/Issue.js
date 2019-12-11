"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Milestone = _interopRequireDefault(require("./Milestone"));

var _UserBasic = _interopRequireDefault(require("./UserBasic"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Issue model module.
 * @module model/Issue
 * @version 1.1.0
 */
var Issue =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>Issue</code>.
   * Get currently authenticated user&#39;s issues
   * @alias module:model/Issue
   */
  function Issue() {
    _classCallCheck(this, Issue);

    Issue.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Issue, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Issue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Issue} obj Optional instance to populate.
     * @return {module:model/Issue} The populated <code>Issue</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Issue();

        if (data.hasOwnProperty('assignee')) {
          obj['assignee'] = _UserBasic["default"].constructFromObject(data['assignee']);
        }

        if (data.hasOwnProperty('author')) {
          obj['author'] = _UserBasic["default"].constructFromObject(data['author']);
        }

        if (data.hasOwnProperty('confidential')) {
          obj['confidential'] = _ApiClient["default"].convertToType(data['confidential'], 'String');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('downvotes')) {
          obj['downvotes'] = _ApiClient["default"].convertToType(data['downvotes'], 'String');
        }

        if (data.hasOwnProperty('due_date')) {
          obj['due_date'] = _ApiClient["default"].convertToType(data['due_date'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('iid')) {
          obj['iid'] = _ApiClient["default"].convertToType(data['iid'], 'String');
        }

        if (data.hasOwnProperty('labels')) {
          obj['labels'] = _ApiClient["default"].convertToType(data['labels'], 'String');
        }

        if (data.hasOwnProperty('milestone')) {
          obj['milestone'] = _Milestone["default"].constructFromObject(data['milestone']);
        }

        if (data.hasOwnProperty('project_id')) {
          obj['project_id'] = _ApiClient["default"].convertToType(data['project_id'], 'String');
        }

        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');
        }

        if (data.hasOwnProperty('subscribed')) {
          obj['subscribed'] = _ApiClient["default"].convertToType(data['subscribed'], 'String');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'String');
        }

        if (data.hasOwnProperty('upvotes')) {
          obj['upvotes'] = _ApiClient["default"].convertToType(data['upvotes'], 'String');
        }

        if (data.hasOwnProperty('user_notes_count')) {
          obj['user_notes_count'] = _ApiClient["default"].convertToType(data['user_notes_count'], 'String');
        }

        if (data.hasOwnProperty('web_url')) {
          obj['web_url'] = _ApiClient["default"].convertToType(data['web_url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Issue;
}();
/**
 * @member {module:model/UserBasic} assignee
 */


Issue.prototype['assignee'] = undefined;
/**
 * @member {module:model/UserBasic} author
 */

Issue.prototype['author'] = undefined;
/**
 * @member {String} confidential
 */

Issue.prototype['confidential'] = undefined;
/**
 * @member {String} created_at
 */

Issue.prototype['created_at'] = undefined;
/**
 * @member {String} description
 */

Issue.prototype['description'] = undefined;
/**
 * @member {String} downvotes
 */

Issue.prototype['downvotes'] = undefined;
/**
 * @member {String} due_date
 */

Issue.prototype['due_date'] = undefined;
/**
 * @member {String} id
 */

Issue.prototype['id'] = undefined;
/**
 * @member {String} iid
 */

Issue.prototype['iid'] = undefined;
/**
 * @member {String} labels
 */

Issue.prototype['labels'] = undefined;
/**
 * @member {module:model/Milestone} milestone
 */

Issue.prototype['milestone'] = undefined;
/**
 * @member {String} project_id
 */

Issue.prototype['project_id'] = undefined;
/**
 * @member {String} state
 */

Issue.prototype['state'] = undefined;
/**
 * @member {String} subscribed
 */

Issue.prototype['subscribed'] = undefined;
/**
 * @member {String} title
 */

Issue.prototype['title'] = undefined;
/**
 * @member {String} updated_at
 */

Issue.prototype['updated_at'] = undefined;
/**
 * @member {String} upvotes
 */

Issue.prototype['upvotes'] = undefined;
/**
 * @member {String} user_notes_count
 */

Issue.prototype['user_notes_count'] = undefined;
/**
 * @member {String} web_url
 */

Issue.prototype['web_url'] = undefined;
var _default = Issue;
exports["default"] = _default;