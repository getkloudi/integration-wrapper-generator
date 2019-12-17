"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IssueEventIssueLabels = _interopRequireDefault(require("./IssueEventIssueLabels"));

var _IssueEventIssueMilestone = _interopRequireDefault(require("./IssueEventIssueMilestone"));

var _IssueEventIssuePullRequest = _interopRequireDefault(require("./IssueEventIssuePullRequest"));

var _User = _interopRequireDefault(require("./User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The IssueEventIssue model module.
 * @module model/IssueEventIssue
 * @version 1.3.0
 */
var IssueEventIssue =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>IssueEventIssue</code>.
   * @alias module:model/IssueEventIssue
   */
  function IssueEventIssue() {
    _classCallCheck(this, IssueEventIssue);

    IssueEventIssue.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IssueEventIssue, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>IssueEventIssue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueEventIssue} obj Optional instance to populate.
     * @return {module:model/IssueEventIssue} The populated <code>IssueEventIssue</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IssueEventIssue();

        if (data.hasOwnProperty('assignee')) {
          obj['assignee'] = _User["default"].constructFromObject(data['assignee']);
        }

        if (data.hasOwnProperty('body')) {
          obj['body'] = _ApiClient["default"].convertToType(data['body'], 'String');
        }

        if (data.hasOwnProperty('closed_at')) {
          obj['closed_at'] = _ApiClient["default"].convertToType(data['closed_at'], 'String');
        }

        if (data.hasOwnProperty('comments')) {
          obj['comments'] = _ApiClient["default"].convertToType(data['comments'], 'Number');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'String');
        }

        if (data.hasOwnProperty('html_url')) {
          obj['html_url'] = _ApiClient["default"].convertToType(data['html_url'], 'String');
        }

        if (data.hasOwnProperty('labels')) {
          obj['labels'] = _ApiClient["default"].convertToType(data['labels'], [_IssueEventIssueLabels["default"]]);
        }

        if (data.hasOwnProperty('milestone')) {
          obj['milestone'] = _IssueEventIssueMilestone["default"].constructFromObject(data['milestone']);
        }

        if (data.hasOwnProperty('number')) {
          obj['number'] = _ApiClient["default"].convertToType(data['number'], 'Number');
        }

        if (data.hasOwnProperty('pull_request')) {
          obj['pull_request'] = _IssueEventIssuePullRequest["default"].constructFromObject(data['pull_request']);
        }

        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], Object);
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

  return IssueEventIssue;
}();
/**
 * @member {module:model/User} assignee
 */


IssueEventIssue.prototype['assignee'] = undefined;
/**
 * @member {String} body
 */

IssueEventIssue.prototype['body'] = undefined;
/**
 * ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @member {String} closed_at
 */

IssueEventIssue.prototype['closed_at'] = undefined;
/**
 * @member {Number} comments
 */

IssueEventIssue.prototype['comments'] = undefined;
/**
 * ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @member {String} created_at
 */

IssueEventIssue.prototype['created_at'] = undefined;
/**
 * @member {String} html_url
 */

IssueEventIssue.prototype['html_url'] = undefined;
/**
 * @member {Array.<module:model/IssueEventIssueLabels>} labels
 */

IssueEventIssue.prototype['labels'] = undefined;
/**
 * @member {module:model/IssueEventIssueMilestone} milestone
 */

IssueEventIssue.prototype['milestone'] = undefined;
/**
 * @member {Number} number
 */

IssueEventIssue.prototype['number'] = undefined;
/**
 * @member {module:model/IssueEventIssuePullRequest} pull_request
 */

IssueEventIssue.prototype['pull_request'] = undefined;
/**
 * @member {Object} state
 */

IssueEventIssue.prototype['state'] = undefined;
/**
 * @member {String} title
 */

IssueEventIssue.prototype['title'] = undefined;
/**
 * ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @member {String} updated_at
 */

IssueEventIssue.prototype['updated_at'] = undefined;
/**
 * @member {String} url
 */

IssueEventIssue.prototype['url'] = undefined;
/**
 * @member {module:model/User} user
 */

IssueEventIssue.prototype['user'] = undefined;
var _default = IssueEventIssue;
exports["default"] = _default;