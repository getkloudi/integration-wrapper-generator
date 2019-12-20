"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _User = _interopRequireDefault(require("./User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The IssueEventIssueMilestone model module.
 * @module model/IssueEventIssueMilestone
 * @version 1.3.1
 */
var IssueEventIssueMilestone =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>IssueEventIssueMilestone</code>.
   * @alias module:model/IssueEventIssueMilestone
   */
  function IssueEventIssueMilestone() {
    _classCallCheck(this, IssueEventIssueMilestone);

    IssueEventIssueMilestone.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IssueEventIssueMilestone, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>IssueEventIssueMilestone</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueEventIssueMilestone} obj Optional instance to populate.
     * @return {module:model/IssueEventIssueMilestone} The populated <code>IssueEventIssueMilestone</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IssueEventIssueMilestone();

        if (data.hasOwnProperty('closed_issues')) {
          obj['closed_issues'] = _ApiClient["default"].convertToType(data['closed_issues'], 'Number');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'String');
        }

        if (data.hasOwnProperty('creator')) {
          obj['creator'] = _User["default"].constructFromObject(data['creator']);
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('due_on')) {
          obj['due_on'] = _ApiClient["default"].convertToType(data['due_on'], 'String');
        }

        if (data.hasOwnProperty('number')) {
          obj['number'] = _ApiClient["default"].convertToType(data['number'], 'Number');
        }

        if (data.hasOwnProperty('open_issues')) {
          obj['open_issues'] = _ApiClient["default"].convertToType(data['open_issues'], 'Number');
        }

        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], Object);
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return IssueEventIssueMilestone;
}();
/**
 * @member {Number} closed_issues
 */


IssueEventIssueMilestone.prototype['closed_issues'] = undefined;
/**
 * ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @member {String} created_at
 */

IssueEventIssueMilestone.prototype['created_at'] = undefined;
/**
 * @member {module:model/User} creator
 */

IssueEventIssueMilestone.prototype['creator'] = undefined;
/**
 * @member {String} description
 */

IssueEventIssueMilestone.prototype['description'] = undefined;
/**
 * ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @member {String} due_on
 */

IssueEventIssueMilestone.prototype['due_on'] = undefined;
/**
 * @member {Number} number
 */

IssueEventIssueMilestone.prototype['number'] = undefined;
/**
 * @member {Number} open_issues
 */

IssueEventIssueMilestone.prototype['open_issues'] = undefined;
/**
 * @member {Object} state
 */

IssueEventIssueMilestone.prototype['state'] = undefined;
/**
 * @member {String} title
 */

IssueEventIssueMilestone.prototype['title'] = undefined;
/**
 * @member {String} url
 */

IssueEventIssueMilestone.prototype['url'] = undefined;
var _default = IssueEventIssueMilestone;
exports["default"] = _default;